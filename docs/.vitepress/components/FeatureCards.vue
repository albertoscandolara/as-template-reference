<template>
  <div class="features">
    <div class="feature-card" v-for="f in features" :key="f.title">
      <img :src="f.img" class="feature-img" />
      <div class="feature-content">
        <h3 class="feature-title">{{ f.title }}</h3>
        <p class="feature-description">{{ f.description }}</p>
        <a :href="f.link" class="vp-button">Learn more →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.feature-card {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-text-2);
  flex-wrap: wrap;
}

.feature-img {
  border-radius: 8px;
  flex-shrink: 0;
  width: 76px;
  height: 76px;
}

.feature-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.feature-title {
  margin: 0;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.feature-description {
  margin: 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

/* small screens: stack vertically */
@media (max-width: 400px) {
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .feature-content {
    align-items: center;
  }
}
</style>
