<script lang="ts">
  import Styles from "./styles/Styles.svelte";

  let name: string = "TS";
</script>

<Styles />

<h1>
  Svelte
  <span>{name}</span>
  <em>Hot</em>
</h1>

<ul>
  <li>Svelte</li>
  <li>Typescript</li>
  <li>Nollup</li>
  <li>SCSS</li>
</ul>

<style type="text/scss">
  @import "./styles/variables.scss";

  h1 {
    color: $primary;
    text-transform: uppercase;
	text-align: center;
	> span {
		color: $secondary
	}
  }

  ul {
    border-top: 1px dotted $primary;
    border-bottom: 1px dotted $primary;
    max-width: max-content;
    margin: 0 auto;
    list-style: upper-roman;
    > li {
      color: $black;
      margin: 0.5rem auto;
      font-size: 2rem;
    }
  }

</style>
