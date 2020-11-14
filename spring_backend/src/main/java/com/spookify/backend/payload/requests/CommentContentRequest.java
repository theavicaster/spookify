package com.spookify.backend.payload.requests;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class CommentContentRequest {

    @NotBlank(message = "Comment content cannot be blank")
    @Size(max = 255, message = "Comment should be of maximum 255 characters")
    private String content;
}
