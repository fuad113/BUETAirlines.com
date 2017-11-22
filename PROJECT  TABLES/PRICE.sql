CREATE TABLE PRICE 
(
  PRICE_ID VARCHAR2(20) NOT NULL 
, ROUTE_ID VARCHAR2(20) NOT NULL 
, FIRST_CLASS VARCHAR2(20) NOT NULL 
, BUSINESS_CLASS VARCHAR2(20) NOT NULL 
, ECONOMY_CLASS VARCHAR2(20) NOT NULL 
, CONSTRAINT PRICE_PK PRIMARY KEY 
  (
    PRICE_ID 
  )
  ENABLE 
);