# Functional programming in JS reference

So, if you're here you are interested in JS and you are just not getting all the information that you want. So I hope that this can be a comprehensive FP reference. Well, one can dream.

To be clear this will be conprehensive for topics and baseline knowledge to learn. I will try my best to make it as easy to understand (from my perspective) as possible. Every page will have it's own set of links in it's bibliography/citations section at the bottom. I do not presume to know the most or more than anyone else. This is for me to learn and I hope it's useful for others as well.

The code can be found in the repo under `./src`

Note: Feel free to correct me if I'm wrong on anything. Either on twitter [@andriclibresinn](https://twitter.com/andriclibresinn) or put it into a `pull request`. 

!> Change the URLs to be internal not to fantasyland. My pages can link to FL

https://github.com/hemanth/functional-programming-jargon

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
			<th><a href="/#/foundational/setoid">Setoid</a></th>
			<td></td>
			<td>equals</td>
			<td>reflexivity, symmetry, transitivity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/ord">Ord</a></th>
			<td>Setoid</td>
			<td>lte</td>
			<td>totality, antisymmetry, transitivity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/semigroupoid">Semigroupoid</a></th>
			<td></td>
			<td>compose</td>
			<td>associativity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/category">Category</a></th>
			<td>Semigroupoid</td>
			<td>id</td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/semigroup">Semigroup</a></th>
			<td></td>
			<td>concat</td>
			<td>associativity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/monoid">Monoid</a></th>
			<td>Semigroup</td>
			<td>empty</td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/functor">Functor</a></th>
			<td></td>
			<td>map</td>
			<td>identity, composition</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/contravariant">Contravariant</a></th>
			<td></td>
			<td>contramap</td>
			<td>identity, composition</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/apply">Apply</a></th>
			<td>Functor</td>
			<td>ap</td>
			<td>composition</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/applicative">Applicative</a></th>
			<td>Apply</td>
			<td>of</td>
			<td>identity, homomorphism, interchange</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/alt">Alt</a></th>
			<td>Functor</td>
			<td>alt</td>
			<td>associativity, distributivity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/plus">Plus</a></th>
			<td>Alt</td>
			<td>zero</td>
			<td>left identity, right identity, annihilation</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/alternative">Alternative</a></th>
			<td>Applicative, Plus</td>
			<td></td>
			<td>distributivity, annihilation</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/foldable">Foldable</a></th>
			<td></td>
			<td>reduce</td>
			<td></td>
		</tr>
		<tr>
			<th><a href="/#/foundational/traversable">Traversable</a></th>
			<td>Functor, Foldable</td>
			<td>traverse</td>
			<td>naturality, identity, composition</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/chain">Chain</a></th>
			<td>Apply</td>
			<td>chain</td>
			<td>associativity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/chainrec">ChainRec</a></th>
			<td>Chain</td>
			<td>chainRec</td>
			<td>equivalence</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/monad">Monad</a></th>
			<td>Applicative, Chain</td>
			<td></td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/extend">Extend</a></th>
			<td>Functor</td>
			<td>extend</td>
			<td></td>
		</tr>
		<tr>
			<th><a href="/#/foundational/comonad">Comonad</a></th>
			<td>Extend</td>
			<td>extract</td>
			<td>left identity, right identity</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/bifunctor">Bifunctor</a></th>
			<td>Functor</td>
			<td>bimap</td>
			<td>identity, composition</td>
		</tr>
		<tr>
			<th><a href="/#/foundational/profunctor">Profunctor</a></th>
			<td>Functor</td>
			<td>promap</td>
			<td>identity, composition</td>
		</tr>
	</tbody>
</table>

As stolen from: https://delapouite.com/ramblings/fantasy-land-cheat-sheet.html

