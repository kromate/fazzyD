<template>
  <details>
    <summary
      ><h1>Measurement</h1>
      bu
    </summary>
    <p>
      representation of vectors:resultant of several vectors in Euclidean space:lines, planes and
      spheres , the dot and cross products, direction cosines, differentiation of vector functions,
      lami's theorem, polygon of forces, conditions of equilibrium of coplanar forces, newton's laws
      of motion, analytical treatment of static equilibrium of particles and rigid bodies,
      distributed forces, centroids and centres of gravity, moments of inertia, analysis of
      structures and trusses, forces in beams and tables, friction.
    </p>
  </details>
</template>

<script>
export default {};
</script>

<style scoped>
details {
  text-align: center;
  border-radius: 0.2rem;
  width: 85vw;
  max-width: 550px;
  background-color: black;
  border: none;
  height: fit-content;
  margin: 0.3rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: #6c63ff;
  transition: 0.5s;
}
details[open] summary {
  background-color: rgba(230, 230, 230, 0.802);
  transition: 0.5s;
}
h5 {
  margin: 0.5rem 0rem !important;
}
summary {
  border-radius: 0.2rem;
  cursor: pointer;
  outline: none;
  padding: 0.2rem 0.8rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid;
}

p {
  padding: 1rem;
}

summary::-webkit-details-marker {
  display: none;
}
</style>
