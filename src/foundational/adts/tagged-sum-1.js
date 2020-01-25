const union = types =>
  types.reduce(
    (prev, type) => ({
      ...prev,
      [type]: data => ({
        match: fns => fns[type](data),
      }),
    }),
    {}
  )

export default union
