package common.exception;

public class BusinessServiceException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private final ErrorCode errorCode;

	public BusinessServiceException(String message, ErrorCode errorCode) {
		super(message);
		this.errorCode = errorCode;
	}

	public BusinessServiceException(String message, ErrorCode errorCode, Throwable cause) {
		super(message, cause);
		this.errorCode = errorCode;
	}

	public ErrorCode getErrorCode() {
		return errorCode;
	}
}
