Question 1 - Reactivity
This happens because the <textarea> is bound the note's text when using v-model. When i start typing, v-model updates the stickie.text data. Vue's system sees this change and updates the character count.

Question 2 - Deep Watch
deep: true tells Vue to look out for changes that are inside of the objects and teh arrays in stickies and not just the actual array. If deep: true was taken out, Vue would only be able to see when the whole of the stickes array changes and esiting the text would not trigger the viewer which would lead to changes not in the auto-save. 

Question 3 - localStorage 
localStorage stores data inside of the browser and does this by stroring it as strings. We want to use JSON.stringify() to change the stickies which is origonaly an array into a string so then it can be stored in the localStorage. If we did not end up using JSON.parse() the data would end up staying as a string and not as an array, and this would lead to the app working incorectly when we would try and use it.

Question 4 - Delete Logic 
.filter() returns a new array that is only containign the ojects/elements that go with the condition. We want to assign the result back to this.stickies because .filter() doesnt change the first array but actually creates a totally new one. We used !== so that we could keep all the notes whcih would remove the mathcing notes. 

Question 5 - Architecture Decision 
The saving logic is placed in a separate saveToStorage() method so the code stays organized and easy to reuse. This way, the watcher simply calls the method instead of handling all the localStorage steps itself. It keeps the code cleaner, easier to update, and allows the same save function to be used elsewhere if needed.
