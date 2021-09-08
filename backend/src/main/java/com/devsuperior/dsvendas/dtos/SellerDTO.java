package com.devsuperior.dsvendas.dtos;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public SellerDTO() {
		
	}

	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	
	public SellerDTO(Seller ent) {
		id = ent.getId();
		name = ent.getName();
	}
	
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}	
	
}
