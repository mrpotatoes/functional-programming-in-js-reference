# Fantasyland cheetsheet
!> I will add the Fantasyland diagram to the top soon(ish?)

!> Just make everything in here linkable.

<!-- https://github.com/hemanth/functional-programming-jargon -->

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
			<th><a href="#/foundational/setoid">Setoid</a></th>
			<td></td>
			<td><code>equals</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/reflexivity" class="tag">reflexivity</a></li>
					<li><a href="#/laws/symmetry" class="tag">symmetry</a></li>
					<li><a href="#/laws/transitivity" class="tag">transitivity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/ord">Ord</a></th>
			<td>Setoid</td>
			<td><code>lte</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/totality" class="tag">totality</a></li>
					<li><a href="#/laws/antisymmetry" class="tag">antisymmetry</a></li>
					<li><a href="#/laws/transitivity" class="tag">transitivity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/semigroupoid">Semigroupoid</a></th>
			<td></td>
			<td><code>compose</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/associativity" class="tag">associativity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/category">Category</a></th>
			<td>Semigroupoid</td>
			<td><code>id</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/left-identity" class="tag">left identity</a></li>
					<li><a href="#/laws/righty-identity" class="tag">right identity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/semigroup">Semigroup</a></th>
			<td></td>
			<td><code>concat</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/associativity" class="tag">associativity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/monoid">Monoid</a></th>
			<td>Semigroup</td>
			<td><code>empty</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/left-identity" class="tag">left identity</a></li>
					<li><a href="#/laws/righty-identity" class="tag">right identity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/functor">Functor</a></th>
			<td></td>
			<td><code>map</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/identity" class="tag">identity</a></li>
					<li><a href="#/laws/composition" class="tag">composition</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/contravariant">Contravariant</a></th>
			<td></td>
			<td><code>contramap</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/identity" class="tag">identity</a></li>
					<li><a href="#/laws/composition" class="tag">composition</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/apply">Apply</a></th>
			<td>Functor</td>
			<td><code>ap</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/composition" class="tag">composition</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/applicative">Applicative</a></th>
			<td>Apply</td>
			<td><code>of</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/identity" class="tag">identity</a></li>
					<li><a href="#/laws/homomorphism" class="tag">homomorphism</a></li>
					<li><a href="#/laws/interchange" class="tag">interchange</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/alt">Alt</a></th>
			<td>Functor</td>
			<td><code>alt</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/associativity" class="tag">associativity</a></li>
					<li><a href="#/laws/distributivity" class="tag">distributivity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/plus">Plus</a></th>
			<td>Alt</td>
			<td><code>zero</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/left-identity" class="tag">left identity</a></li>
					<li><a href="#/laws/righty-identity" class="tag">right identity</a></li>
					<li><a href="#/laws/annihilation" class="tag">annihilation</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/alternative">Alternative</a></th>
			<td>Applicative, Plus</td>
			<td></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/distributivity" class="tag">distributivity</a></li>
					<li><a href="#/laws/annihilation" class="tag">annihilation</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/foldable">Foldable</a></th>
			<td></td>
			<td><code>reduce</code></td>
			<td></td>
		</tr>
		<tr>
			<th><a href="#/foundational/traversable">Traversable</a></th>
			<td>Functor, Foldable</td>
			<td><code>traverse</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/identity" class="tag">identity</a></li>
					<li><a href="#/laws/composition" class="tag">composition</a></li>
					<li><a href="#/laws/naturality" class="tag">naturality</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/chain">Chain</a></th>
			<td>Apply</td>
			<td><code>chain</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/associativity" class="tag">associativity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/chainrec">ChainRec</a></th>
			<td>Chain</td>
			<td><code>chainRec</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/equivalence" class="tag">equivalence</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/monad">Monad</a></th>
			<td>Applicative, Chain</td>
			<td></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/left-identity" class="tag">left identity</a></li>
					<li><a href="#/laws/righty-identity" class="tag">right identity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/extend">Extend</a></th>
			<td>Functor</td>
			<td><code>extend</code></td>
			<td></td>
		</tr>
		<tr>
			<th><a href="#/foundational/comonad">Comonad</a></th>
			<td>Extend</td>
			<td><code>extract</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/left-identity" class="tag">left identity</a></li>
					<li><a href="#/laws/righty-identity" class="tag">right identity</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/bifunctor">Bifunctor</a></th>
			<td>Functor</td>
			<td><code>bimap</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/identity" class="tag">identity</a></li>
					<li><a href="#/laws/composition" class="tag">composition</a></li>
				</ul>
			</td>
		</tr>
		<tr>
			<th><a href="#/foundational/profunctor">Profunctor</a></th>
			<td>Functor</td>
			<td><code>promap</code></td>
			<td>
				<ul class="tags">
					<li><a href="#/laws/identity" class="tag">identity</a></li>
					<li><a href="#/laws/composition" class="tag">composition</a></li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

As stolen from: https://delapouite.com/ramblings/fantasy-land-cheat-sheet.html

