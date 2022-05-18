// insert a task
app.post("/task", async (req, res) => {
  const toDo = req.body;
  const result = await toDoCollections.insertOne(toDo);
  res.send(result);
});

// get task by email

app.get("/task/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  const result = await toDoCollections.find(query).toArray();
  res.send(result);
});
// delete a task using _id

app.delete("/task/:id", async (req, res) => {
  console.log("hello");
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await toDoCollections.deleteOne(query);
  res.send(result);
});
// update data by id using put

app.put("/task/:id", async (req, res) => {
  console.log("hello");
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  const options = { upsert: true };
  // create a document that sets the plot of the movie
  const updateDoc = {
    $set: {
      status: "done",
    },
  };

  const result = await toDoCollections.updateOne(filter, updateDoc, options);
  res.send(result);
});
