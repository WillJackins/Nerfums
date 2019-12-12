package com.nerfums.nerfumsservice.resource;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.nerfums.nerfumsservice.delegate.ContractDelegate;

@WebMvcTest(ContractController.class)
public class ContractControllerTests
{
	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private ContractDelegate mockDelegate;

	@Test
	void getContractsTest()
	{

	}

	@Test
	void postContractTest()
	{

	}
}
