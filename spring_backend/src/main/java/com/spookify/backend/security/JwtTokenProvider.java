package com.spookify.backend.security;

import com.spookify.backend.domain.User;
import io.jsonwebtoken.*;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.spookify.backend.security.SecurityConstants.EXPIRATION_TIME;
import static com.spookify.backend.security.SecurityConstants.JWT_SECRET;


@Component
public class JwtTokenProvider {

    protected final Log logger = LogFactory.getLog(this.getClass());

    public String generateToken(Authentication authentication) {

        User user = (User) authentication.getPrincipal();

        Date now = new Date(System.currentTimeMillis());
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        String userId = Long.toString(user.getId());

        Map<String, Object> claims = new HashMap<>();
        claims.put("id", userId);
        claims.put("username", user.getUsername());
        claims.put("fullName", user.getFullName());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }

    public boolean validateToken(String jwtToken) {

        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(jwtToken);
            return true;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT Signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT Token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty");
        }
        return false;
    }

    public Long getUserIdFromJWT(String jwtToken) {

        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET)
                .parseClaimsJws(jwtToken).getBody();
        String id = (String) claims.get("id");

        return Long.parseLong(id);
    }
}
