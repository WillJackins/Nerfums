package com.nerfums.nerfumsservice.exception;

import common.exception.ErrorCode;

public enum NerfumsErrorCode implements ErrorCode
{
	NO_CONTRACT;

	@Override
	public String getErrorCode()
	{
		return this.name();
	}
}
