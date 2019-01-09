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

## Use Case
### Procurement
 - Upon procurement of new stock, the user should select a product, enter the product quantity, and enter the procurement price.
 - The procurement date is set by default in the database, but it should also be represented in the application UI so that older procurements can be entered if necessary.
 - The software should update `product` and insert `financial` records to represent the procurment.

### Sales
 - When a sale is made, the user should select a product and enter a quantity for each item sold. This isn't as useful in a business that only sells one product, but will be more important when there are multiple product offerings.
 - The sales date is set by default in the database, but should also be represented in the application UI so that older sales can be entered if necessary.
 - The software should insert `sales` and `sales_detail` as well as `financial` records representing the sales.

### Further Considerations
 - User Interfaces can be built around detailed modifications of any or all of these tables depending on the client / business requirements. It should never be necessary to modify table directly with SQL.
 - At some point, consideration should be given to authentication, authorization, and user roles.

## Database Structure

The `procurement` table is used to track procurement of new stock.
```
CREATE TABLE procurement (
  procurement_id    INT NOT NULL AUTO_INCREMENT,
  procurement_date  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  purchase_price    INT NOT NULL,
  product_id        INT NOT NULL,
  product_quantity  INT NOT NULL,
  PRIMARY KEY (procurement_id)
)
```

This trigger will update the available inventory in the product table when a new record is inserted into procurement.
We can debate about triggers and when / when not to use them. This is just an example.
```
CREATE TRIGGER update_inventory
AFTER INSERT ON procurement
UPDATE product
SET inventory = inventory + NEW.product_quantity
WHERE product_id = NEW.product_id;
```

The `financial` table is used to keep track of income (from sales) and expenditures (from procurement).
```
CREATE TABLE financial (
  transaction_id      INT NOT NULL AUTO_INCREMENT,
  transaction_date    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  transaction_type    VARCHAR(12),  -- 'sales' or 'procurement'
  transaction_amount  INT NOT NULL,
  PRIMARY KEY (transaction_id)
)
```


The `product` table has one record for each product sold. In this scenario, there's only one product. This table also tracks the quantity of each product available in the inventory. A trigger can be set to update the product inventory when new records are added to the procurement table.
```
CREATE TABLE product (
  product_id     INT NOT NULL AUTO_INCREMENT,
  price          INT NOT NULL DEFAULT 0,
  inventory      INT NOT NULL DEFAULT 0,
  description    VARCHAR(500),
  PRIMARY KEY (product_id)
)
```

```
CREATE TABLE sales (
  sales_id     INT NOT NULL AUTO_INCREMENT,
  sales_date   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (sales_id)
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
