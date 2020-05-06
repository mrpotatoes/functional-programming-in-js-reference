# This is a place to tool around.
!> Do not include this in the sidebar





<details>
  <summary>
    <b><code>fantasy-land/traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)</code></b>
    <br /><br />
    This is a reformatted example from the <a href="https://github.com/fantasyland/fantasy-land">Fantasy Land Spec</a>
  </summary>
<br />

| Icongraphy | Explained |
|-----|---|
| `fantasy-land/traverse` | Method name, it's called `traverse` |
| `::` | Is a member of |
|  `Applicative f, Traversable t` | Type constraints.  |
|  `=>` | Constraight type  |
|  `t a` | Method target type |
| `~>` | `a` is a method on `m` |
| `(TypeRep f, a -> f b)` | argument types |
| `f (t b)` | The return type, it's a function of subtype `f` that takes `(t b)` |

</details>
