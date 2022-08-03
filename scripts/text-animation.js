const sections = document.querySelectorAll("section")

const fadeIn = function () {
  
  sections.forEach(section =>{
	let delay = 0.1
	const animatedTags = section.querySelectorAll("h2 span, p, h3 span, img")

	animatedTags.forEach(tag => {
		tag.style.opacity = 0
	})
	const sectionTop = section.getBoundingClientRect().top
	const sectionBottom = section.getBoundingClientRect().bottom
		
	if (sectionTop < window.innerHeight / 2) {
	  delay = 0.05
	  animatedTags.forEach(tag => {
		tag.style.animation = `fadeIn 0.3s ${delay}s both`
		delay += 0.05
	  })      
	} else {
	  animatedTags.forEach(tag => {
		tag.style.animation = `fadeOut 0.2s 0s both`
	  })
	}
  })
}

fadeIn()

document.addEventListener("scroll", function () {
  fadeIn()
})

window.addEventListener("resize", function () {
  fadeIn()
})