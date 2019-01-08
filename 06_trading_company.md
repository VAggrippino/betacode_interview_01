# Trading Company Software Architecture

    6. Design & show your solution either by code/ pseudo code/ database schema
       for this problem?

    Company A is a trading company. They buy products in bulk and repackage
    them and sold them at smaller packages at higher prices.

    For simplicity, the company only focuses on selling one product.

    The company now looking for a software to help them track inventory that
    are going in and out of their premise.

    Design a software that help them track the following:

      - Inventory received from procurement, which includes its price,
      quantity, date
      - Track new packages that were create from the procured inventory?
      - How much the cost of each package sold?
      - How does the system suggest to the owner to utilise oldest inventory
      first before it expires?

    Tips; design db schema first then explain how your system works against this schema.

## Example
32Gb flash drives purchased in bulk online and sold individually at a local shopping center.

 - 100 flash drives bought online for $3 each == $300
 - Sold individually for $10 at local kedai

## Database Structure

The `procurement` table is used to track procurement of new stock.
```
CREATE TABLE procurement (
  procurement_id    INT NOT NULL AUTO_INCREMENT,
  procurement_date  DATETIME,
  purchase_price    INT NOT NULL,
  product_id        INT NOT NULL,
  product_quantity  INT NOT NULL,
  PRIMARY KEY (procurement_id)
  TRIGGER ON INSERT: UPDATE product.inventory ...
)
```

The `financial` table is used to keep track of income (from sales) and expenditures (from procurement).
```
CREATE TABLE financial (
  transaction_id      INT NOT NULL AUTO_INCREMENT,
  transaction_date    DATETIME NOT NULL,
  transaction_type    VARCHAR(12),  -- 'sales' or 'procurement'
  transaction_amount  INT NOT NULL,
  PRIMARY KEY (transaction_id)
)
```


The `product` table has one record for each product sold. In this scenario, there's only one product. This table also tracks the quantity of each product available in the inventory. A trigger can be set to update the product inventory when new records are added to the procurement table.
```
CREATE TABLE product (
  product_id     INT NOT NULL AUTO_INCREMENT,
  inventory      INT NOT NULL DEFAULT 0,  -- how many of the product we have
  description    VARCHAR(500),
  PRIMARY KEY (product_id)
)
```

```
CREATE TABLE sales (
  sales_id     INT NOT NULL AUTO_INCREMENT,
  sales_date   DATETIME NOT NULL,
  PRIMARY KEY (sales_id)
  TRIGGER ON INSERT: UPDATE product.quantity
  TRIGGER ON INSERT: INSERT INTO financial
  TRIGGER ON DELETE: UPDATE product.quantity
  TRIGGER ON DELETE: DELETE FROM financial
)
```

The `sales_detail` table contains detailed information about individual items in a particular sale. The importance of this table would be evident in a more complex scenario with more products.
```
CREATE TABLE sales_detail (
  sales_detail_id  INT NOT NULL AUTO_INCREMENT,
  sales_id         INT NOT NULL,
  product_id       INT NOT NULL,
  quantity         INT NOT NULL,
  PRIMARY KEY (sales_detail_id)
)
```

USE CASES
=========

