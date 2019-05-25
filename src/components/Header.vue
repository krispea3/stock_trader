<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded-lg mt-4 mb-4">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item">
                    <router-link class="nav-link"
                                active-class="active"
                                to="/portfolio">
                                Portfolio
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link"
                                active-class="active"
                                to="/stocks">
                                Stocks
                    </router-link>
                </li>
            </ul>

            <ul class="navbar-nav">

                <li class="nav-item">
                    <a class="nav-link"
                        href="#"
                        @click="endDay">
                        End Day
                    </a>
                </li>

                <b-nav-item-dropdown
                            id="my-nav-dropdown"
                            text="Save & Load"
                            toggle-class="nav-link-custom"
                            right>
                    <b-dropdown-item>Save</b-dropdown-item>
                    <b-dropdown-item>Load</b-dropdown-item>
                </b-nav-item-dropdown>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    endDay () {
      alert('Ended day!')
    }
  }
}

</script>
