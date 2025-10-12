# Dealing With Fields

In most of the cases, you will want blocks that can accept fields (example: the "say" block). 

To implement a field in a block, you can pass a "fields" key:

```js
registerBlocks() {
  return [
    ..."your previous block",
    {
      type: "statement", // allows for connection on the top and bottom
      id: "sayHiWithvalue",
      text: "say 'hi' with [abc]",
      fields: {
        abc: {
          kind: "value", 
          type: "String",
          default: "default" 
        },
      },
    },
  ];
}
```

To get a fields value in the blocks code, you can do this:

```js
registerCode() {
  return {
    ..."your previous block function",
    sayHiWithvalue: (inputs) => {
      const value = inputs.abc; // here, we are getting the value of the input

      console.log("hi", value); // example functionality
    }
  };
}
```

## Exercise

In the previous extension we made, add the new `say 'hi' with [abc]` block with its functionality.

### Expected result:

![A block with text saying "say 'hi' with [abc]"](/img/extensions-blockinput.png)

If you look in the console, the result will be `hi default`.