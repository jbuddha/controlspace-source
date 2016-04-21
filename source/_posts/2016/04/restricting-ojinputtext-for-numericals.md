---
title: Restricting an ojInputText to accept only numbers
date: 2016-04-22
tags: ['oraclejet', 'javascript', 'html']
author: Buddha
description: If you have used ojInputText of Oracle Jet framework. You might have observed that it doesn't provide any way to restrict input, here is a solution that simply removes any non numeric characters if entered.
---
Oracle Jet is a beautiful toolkit for simplifying lot of tasks. ojInputText is a basic editor the framework provides, it can validate the text entered based on the regular expression we give, but that only happens on blur and if we simply want to filter any keystrokes that don't match that, we can't directly. One way to do it is to bind a keyUp event and check everytime a character is pressed.

Here is a much cleaner approach. Instead of bindng to value, we can bind to rawValue attribute. This ensures that the observable gets updated on every keystroke. To acheive this, I have created a helper observable which is a computed observable depending on the value of text box. Whenever a new key is pressed, the computation of helper observable takes place. Here, I used simple javascript regex method to cleanup. Once the cleanup is done, I'm updating the original input text if the value has changed, otherwise I'm leaving it alone. Please find the jsFiddle below.

{% jsfiddle 0yakz3q6   'result,js,html' 'dark' %}
