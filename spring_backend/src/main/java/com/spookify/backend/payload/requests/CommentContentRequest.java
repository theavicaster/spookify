package com.spookify.backend.payload.requests;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CommentContentRequest {

    @NotBlank(message = "Comment content cannot be blank")
    private String content;
}
