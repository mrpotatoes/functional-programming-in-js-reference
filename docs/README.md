# Functional programming in JS reference

So, if you're here you are interested in JS and you are just not getting all the information that you want. So I hope that this can be a comprehensive FP reference. Well, one can dream.

The code can be found in the repo under `./src`

!> Change the URLs to be internal not to fantasyland. My pages can link to FL

<table>
	<thead>
		<tr>
			<th>Algebra</th>
			<th>Dependencies</th>
			<th>Function</th>
			<th>Laws</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#setoid">Setoid</a></th>
			<td></td>
			<td>equals</td>
			<td>reflexivity, symmetry, transitivity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#ord">Ord</a></th>
			<td>Setoid</td>
			<td>lte</td>
			<td>totality, antisymmetry, transitivity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#semigroupoid">Semigroupoid</a></th>
			<td></td>
			<td>compose</td>
			<td>associativity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#category">Category</a></th>
			<td>Semigroupoid</td>
			<td>id</td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#semigroup">Semigroup</a></th>
			<td></td>
			<td>concat</td>
			<td>associativity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#monoid">Monoid</a></th>
			<td>Semigroup</td>
			<td>empty</td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#functor">Functor</a></th>
			<td></td>
			<td>map</td>
			<td>identity, composition</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#contravariant">Contravariant</a></th>
			<td></td>
			<td>contramap</td>
			<td>identity, composition</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#apply">Apply</a></th>
			<td>Functor</td>
			<td>ap</td>
			<td>composition</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#applicative">Applicative</a></th>
			<td>Apply</td>
			<td>of</td>
			<td>identity, homomorphism, interchange</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#alt">Alt</a></th>
			<td>Functor</td>
			<td>alt</td>
			<td>associativity, distributivity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#plus">Plus</a></th>
			<td>Alt</td>
			<td>zero</td>
			<td>left identity, right identity, annihilation</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#alternative">Alternative</a></th>
			<td>Applicative, Plus</td>
			<td></td>
			<td>distributivity, annihilation</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#foldable">Foldable</a></th>
			<td></td>
			<td>reduce</td>
			<td></td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#traversable">Traversable</a></th>
			<td>Functor, Foldable</td>
			<td>traverse</td>
			<td>naturality, identity, composition</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#chain">Chain</a></th>
			<td>Apply</td>
			<td>chain</td>
			<td>associativity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#chainrec">ChainRec</a></th>
			<td>Chain</td>
			<td>chainRec</td>
			<td>equivalence</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#monad">Monad</a></th>
			<td>Applicative, Chain</td>
			<td></td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#extend">Extend</a></th>
			<td>Functor</td>
			<td>extend</td>
			<td></td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#comonad">Comonad</a></th>
			<td>Extend</td>
			<td>extract</td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#bifunctor">Bifunctor</a></th>
			<td>Functor</td>
			<td>bimap</td>
			<td>identity, composition</td>
		</tr>
		<tr>
			<th><a href="https://github.com/fantasyland/fantasy-land#profunctor">Profunctor</a></th>
			<td>Functor</td>
			<td>promap</td>
			<td>identity, composition</td>
		</tr>
	</tbody>
</table>

As stolen from: https://delapouite.com/ramblings/fantasy-land-cheat-sheet.html

