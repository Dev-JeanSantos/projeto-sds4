package com.devsuperior.dsvendas.dtos;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;


public class SaleSucessDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Long visited;
	private Long deals;
	
	public SaleSucessDTO() {
	
	}
	
	public SaleSucessDTO(Seller seller, Long visited, Long deals) {
		sellerName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}

	public String getSellerName() {
		return sellerName;
	}

	public Long getVisited() {
		return visited;
	}

	public Long getDeals() {
		return deals;
	}
	
}
