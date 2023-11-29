<script>
    import Image from "$lib/components/Image.svelte";
    import { Col, Row } from "sveltestrap";
</script>

<Row>
    <Col md={{ size: 6, order: 2, offset: 0 }}>
        <div class="side-image">
            <Image
                css="default"
                fileName="goneFishing.jpg"
                alt="A painting by Eunice depicting a woman sitting on the side of a cliff fishing in turbulent waters."
                description="'Gone Fishing' by me | 2020 "
            />
        </div>
    </Col>
    <Col md={{ size: 6, order: 1, offset: 0 }}>
        <div class="description">
            <h1 class="shiny">Why, hello there!</h1>
            <p>
                I'm an aspiring full-stack developer studying web frameworks.
                Previously, I worked in analytics and spent my days diving into
                large datasets to understand and share the story data tells. It
                was during that time that I developed an interest in process
                improvement - analyzing how things work to identify
                opportunities to implement efficiencies. These days, I'm
                passionate about building solutions and products to help people
                save time and money.
            </p>

            <p>When I'm away from the computer, I'm probably...</p>
            <ul>
                <li>on a long walk listening to a podcast</li>
                <li>
                    trying to get creative with clay or expressive with words
                </li>
                <li>
                    having conversations about nothing and everything with
                    customers at my mother's small business
                </li>
            </ul>

            <p>
                Current Rotation: Maggie Rogers, Reneé Rapp, Léon, Lake Street
                Dive.
            </p>
        </div>
    </Col>
</Row>

<style>
    .description {
        margin: 1.5rem 0;
    }
</style>
