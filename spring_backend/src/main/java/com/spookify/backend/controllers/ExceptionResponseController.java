package com.spookify.backend.controllers;

import com.spookify.backend.exceptions.NotFoundException;
import com.spookify.backend.payload.responses.NotFoundExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
@RestController
public class ExceptionResponseController extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<NotFoundExceptionResponse> handleNotFoundException(NotFoundException ex, WebRequest req) {

        NotFoundExceptionResponse exceptionResponse = new NotFoundExceptionResponse();
        exceptionResponse.setNotFound(ex.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

}