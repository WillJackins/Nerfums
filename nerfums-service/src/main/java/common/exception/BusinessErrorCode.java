package common.exception;

public enum BusinessErrorCode implements ErrorCode {
	BAD_GATEWAY,
	RANDOM;

	@Override
	public String getErrorCode() {
		return this.name();
	}
}
