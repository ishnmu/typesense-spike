# Typesense Spike

### Prerequisites

Make sure below applications are installed before proceeding.

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [NodeJS](https://nodejs.org/en/download/)

Once you install / made sure the above applications are present. Proceed with the below steps.

### Setting Up Typesense

We are going to use typesense's docker image to run it in our local.

#### Start Typesense locally

```sh
docker-compose up -d
```

> you will see some logs something similar to the below one.

```
Creating network "typesense-spike_default" with the default driver
Creating volume "typesense-spike_typesense-data" with local driver
Creating typesense-spike_typesense_1 ... done
```

Now we have our typesense running locally.

To make sure its running, hit the below url in your browser.

`http://localhost:8108/health`

you shoud see a response as below

```
{"ok":true}
```

### Lets Configure Typesense

#### Create Collection to Store data

```sh
node createCollection.js
```

#### Dump data into the Collection

```sh
node dumpDataToCollection.js
```

#### Search it

```sh
node search.js
```

### Stop typesense

```sh
docker-compose down -v
```

References:

- [Typesense Guide](https://typesense.org/docs/guide/)
- [How to Install Typesense](https://typesense.org/docs/guide/install-typesense.html)

- [How to configure Typesense Client](https://typesense.org/docs/guide/installing-a-client.html)

- [Building Demo application](https://typesense.org/docs/guide/building-a-search-application.html)

Demo apps build using Typesense:

- [Instant Search 2 Million Recipes](https://recipe-search.typesense.org/)

- [Ecommerce Store with Typesense](https://ecommerce-store.typesense.org/)
