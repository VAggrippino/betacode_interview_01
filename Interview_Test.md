# Interview Test

<div class="instructions">

**Instruction:**  
Create a repo at your github as soon as you start to answer the following questions. Share the link to the repo to me. You do not have to complete all the questions. I just want to see your progress as you attempt to solve the problems. There is no deadline to complete the question but try not to take too much time. You do not have to finish all the questions. When you have done, we will have a call to discuss your solution. Feel free to contact me if you have any question.</div>

1. Given an array `[1,4,5,7,12, 19, 45, 101]`, write a function that returns array that satisfies this condition: `x*2 - (5 - x) == even number`

2. Write ruby code that models the following (Binary Search Tree):

    left child is always less than the parent & right child is always bigger than the parent.

    A parent can only have 2 immediate child node.

    1. Write a method to add item to the model so caller can build the tree like below.
    2. Then perform a walk of depth first search on the model so we get result like this: 21, 56, 62, 67, 78, 81, 97, 115

    ![Binary Search Tree example](images/Binary_Search_Tree_example.jpg)

3. Write a react form to update user profile.
    - Fields: first name, last name, email, birth date, preferred job title, number of years experience
    - send data to dummy end point https://api.dummyendpoint/me/profile with http PUT
    - validate fields name and email to be required

4. Write a simple calendar app in react in traditional calendar layout e.g. M, T, W, T, F, S, S table.  
    - There can be one or zero booking for each date.
    - If there is a booking, the cell will have an indicator.
    - Add a button that randomly generate several bookings for that month.
    The calendar table should update automatically to show these bookings.

5. Ruby question; Show how to can retrieve attribute/field of a variable
where the variable could be null OR the field could be null.

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

<style type="text/css">
    .instructions {
        background-color: yellow;
        border: 1px solid black;
        padding: 0.5rem;
    }

    .instructions strong {
        text-decoration: underline;
    }
</style>