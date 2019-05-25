<template>
    <b-col>
        <b-card :title="stock.name"><small>Price: {{ stock.price }}</small>
            <b-card-text>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
    </b-col>

</template>

<script>
export default {
  props: ['stock']
}
</script>
