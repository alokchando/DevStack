## Name of your project
DevStack

## Description
DevStack is a modern React-based web application that helps developers explore different technologies and build their development stack. Developers can browse technologies, add & remove them to their stack easily.

## Technologies Used
 1.React
 2.TypeScript
 3.Tailwind CSS
 4.React Toastify

 ## Features
1.Explore different Technologies

A developer can browse different development technologies with information such as category, rating, difficulty, and description.

2.Build Your Stack

 A developer can Add their learned technologies to their personal stack and easily remove individual technologies or clear the entire stack.

3.Get Notifications

Get instant feedback with toast notifications when adding technologies or attempting to add a technology that is already in available stack.



## Ans
1.Jsx is a mixture of HTML and JavaScript.  It is used in React to keep UI markup with functionality
2.Props passed data from parents to child and state manage the changing data.
3.Usestate  is hook which store data and update the data ui when data change.
4.Useeffect is helps in side effects in react components. fetching json is a outside randaring process, We don't want to fetch the data on every randaring
5.Because its not possible to identity without unique key
6.Conditional rendering is  where we render the ui by condition.   we use conditional randaring in adding stack part  where, when it’s not empty, we render the stack items. But if it’s empty, we show the empty message.
7.In React, data flows in one direction. You can send data from the parent to the child, but you can't directly pass data from the child to the parent. So, if you need to send data from the child to the parent, you can add a function in the main or parent file and pass that function to the child.