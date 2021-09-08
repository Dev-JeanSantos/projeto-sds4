package com.devsuperior.dsvendas.dtos;

import java.io.Serializable;
import java.time.LocalDate;

import com.devsuperior.dsvendas.entities.Sale;

public class SaleDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Integer visited;
	private Integer deals;
	private Double amount;
	private LocalDate date;
	
	private SellerDTO seller;
	
	public SaleDTO() {
		
	}	
	
	public SaleDTO(Long id, Integer visited, Integer deals, Double amount, LocalDate date, SellerDTO seller) {
		this.id = id;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
		this.seller = seller;
	}
	
	public SaleDTO(Sale ent) {
		id = ent.getId();
		visited = ent.getVisited();
		deals = ent.getDeals();
		amount = ent.getAmount();
		date = ent.getDate();
		seller = new SellerDTO(ent.getSeller());
	}

	public Long getId() {
		return id;
	}

	public Integer getVisited() {
		return visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public Double getAmount() {
		return amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public SellerDTO getSeller() {
		return seller;
	}
	
}
