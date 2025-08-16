const allblog = [
    {
        "id":3,
        "title":"My name is prakash",
        "slug":"My-name-is-prakash"
    },
    {
        "id":5,
        "title":"My surname is Swami",
        "slug":"My-surname-is-swami"
    }
];


// Business logic (dummy example)

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  // Normally you'd save to DB here
  res.json({ message: "User registered successfully!", user: { name, email } });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  // Normally you'd check DB + password hash
  if (email === "test@example.com" && password === "123456") {
    res.json({ message: "Login successful", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

export const getUserProfile = (req, res) => {
  const userId = req.params.id;
  // Normally you'd fetch user from DB
  res.json({ id: userId, name: "John Doe", email: "john@example.com" });
};

export const explore = (req, res) => {
    res.json(allblog);
};

export const addblog = (req, res) => {
    const { id, title, description, category}=req.body;
    res.json({message:"blog added sucessfully", data:{id, title, description, category}});
}

export const readblog = (req, res) => {
    const blogslug = req.params.slug;
    const selectedblog = allblog.find((blogg) => blogg.slug == blogslug);

  if (!selectedblog) {
    return res.status(404).json({ error: "Blog not found" });
  }
    res.json(selectedblog);
}


