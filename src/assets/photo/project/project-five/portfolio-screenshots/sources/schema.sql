--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.brands (
    brand_id character varying(50) NOT NULL,
    brand_name character varying(100)
);


--
-- Name: cartDtl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartDtl" (
    "cartId" character varying(100) NOT NULL,
    "pdId" character varying(100) NOT NULL,
    qty real,
    price real
);


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" character varying(100) NOT NULL,
    "cusId" character varying(100),
    "cartDate" date,
    "cartCf" boolean DEFAULT false
);


--
-- Name: members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.members (
    mem_email character varying(100) NOT NULL,
    mem_name character varying(100),
    mem_password_hash character varying(255),
    mem_phonenumber character varying(100),
    role character varying(100)
);


--
-- Name: orderDtl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."orderDtl" (
    "orderId" character varying(20) NOT NULL,
    "pdId" character varying(20) NOT NULL,
    qty integer DEFAULT 1 NOT NULL,
    price numeric(10,2) NOT NULL
);


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" character varying(20) NOT NULL,
    "cusId" character varying(100) NOT NULL,
    "orderDate" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "totalQty" integer DEFAULT 0,
    "totalPrice" numeric(10,2) DEFAULT 0,
    "orderStatus" character varying(50) DEFAULT 'pending'::character varying,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    product_id character varying(50) NOT NULL,
    productname character varying(100),
    price real,
    meterial character varying(50),
    size character varying(50),
    description character varying(200),
    product_typeid character varying(50),
    brand_id character varying(50),
    series_id character varying(50)
);


--
-- Name: producttype; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.producttype (
    product_typeid character varying(50) NOT NULL,
    type_name character varying(100)
);


--
-- Name: series; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.series (
    series_id character varying(50) NOT NULL,
    series_name character varying(100)
);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (brand_id);


--
-- Name: cartDtl cartDtl_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartDtl"
    ADD CONSTRAINT "cartDtl_pkey" PRIMARY KEY ("cartId", "pdId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: members members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (mem_email);


--
-- Name: orderDtl orderDtl_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."orderDtl"
    ADD CONSTRAINT "orderDtl_pkey" PRIMARY KEY ("orderId", "pdId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- Name: producttype producttype_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.producttype
    ADD CONSTRAINT producttype_pkey PRIMARY KEY (product_typeid);


--
-- Name: series series_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.series
    ADD CONSTRAINT series_pkey PRIMARY KEY (series_id);


--
-- Name: idx_orderdtl_orderid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_orderdtl_orderid ON public."orderDtl" USING btree ("orderId");


--
-- Name: idx_orders_cusid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_orders_cusid ON public.orders USING btree ("cusId");


--
-- Name: idx_orders_orderdate; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_orders_orderdate ON public.orders USING btree ("orderDate");


--
-- Name: orderDtl orderDtl_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."orderDtl"
    ADD CONSTRAINT "orderDtl_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public.orders("orderId") ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--
