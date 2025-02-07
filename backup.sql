--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

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
-- Name: login_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.login_table (
    user_id integer NOT NULL,
    user_name character varying(255),
    user_pass character varying(100)
);


ALTER TABLE public.login_table OWNER TO postgres;

--
-- Data for Name: login_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.login_table (user_id, user_name, user_pass) FROM stdin;
1	aadesh	fvydfcdd
\.


--
-- Name: login_table login_table_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login_table
    ADD CONSTRAINT login_table_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

