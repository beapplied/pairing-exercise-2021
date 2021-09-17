<template>
  <PageLayout>
    <Card :fullWidth="true">
      <h3>Applicants</h3>
      <div>
        <div
          :class="$style.applicantRow"
          v-for="application in applicantList"
          :key="application.id"
        >
          <p><strong>Name:</strong> {{ application.firstName }} {{ application.lastName }}</p>
        </div>
      </div>
    </Card>
  </PageLayout>
</template>

<script>
import PageLayout from "@/Layouts/PageLayout";
import Card from "@/components/Card/Card.vue";

export default {
  name: "ApplicantPage",
  components: {
    PageLayout,
    Card
  },
  computed: {
    applicantList() {
      return this.$store.state.applications;
    }
  }
};
</script>

<style module src="./ApplicantPage.css" />
