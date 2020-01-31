package com.nerfums.nerfumsservice.resource;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.nerfums.nerfumsservice.exception.NerfumsErrorCode;

import common.exception.BusinessServiceException;
import common.exception.BusinessValidationException;
import common.exception.ErrorDetails;

@ControllerAdvice
public class FaultBarrier {
	private static final Logger LOGGER = LoggerFactory.getLogger(FaultBarrier.class);

	@ExceptionHandler(UsernameNotFoundException.class)
	public ResponseEntity<ErrorDetails> handleUsernameNotFoundException(UsernameNotFoundException ex, WebRequest request) {
		return prepareErrorResponse(ex, ex.getMessage(), request, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<ErrorDetails> handleBadCredentialsException(BadCredentialsException ex, WebRequest request) {
		return prepareErrorResponse(ex, ex.getMessage(), request, HttpStatus.FORBIDDEN);
	}

	@ExceptionHandler(BusinessValidationException.class)
	public ResponseEntity<ErrorDetails> handleBusinessValidationException(BusinessValidationException ex, WebRequest request) {
		return prepareErrorResponse(ex, ex.getMessage(), request, HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@ExceptionHandler(BusinessServiceException.class)
	public ResponseEntity<ErrorDetails> handleBusinessServiceException(BusinessServiceException ex, WebRequest request) {
		HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		if (ex.getErrorCode() == NerfumsErrorCode.NO_CONTRACT || ex.getErrorCode() == NerfumsErrorCode.NO_MODIFIER || ex.getErrorCode() == NerfumsErrorCode.NO_USER)
		{
			httpStatus = HttpStatus.NOT_FOUND;
		}
		return prepareErrorResponse(ex, ex.getMessage(), request, httpStatus);
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<ErrorDetails> handleIllegalArgumentException(IllegalArgumentException ex, WebRequest request) {
		return prepareErrorResponse(ex, "Invalid Arguments", request, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDetails> handleExceptions(Exception ex, WebRequest request) {
		return prepareErrorResponse(ex, "Internal Server Error", request, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	private ResponseEntity<ErrorDetails> prepareErrorResponse(Exception ex, String message, WebRequest request, HttpStatus httpStatus) {
		LOGGER.error(ex.getMessage(), ex);
		ErrorDetails errorDetails = new ErrorDetails(new Date(), message, request.getDescription(false));
		return new ResponseEntity<>(errorDetails, httpStatus);
	}
}
