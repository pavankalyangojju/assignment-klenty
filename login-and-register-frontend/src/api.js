export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Hello",
      username: "Pavan",
      userId: "1",
      parentId: null,
      createdAt: "2022-08-16T23:00:33.010+02:00",
    }
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Pavan",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
