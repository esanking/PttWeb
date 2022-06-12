<template>
	<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title text-primary" id="staticBackdropLabel">訊息</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class=" p-2">
						<p>作者: {{data.author}}</p>
						<p>標題: {{data.title}}</p>
						<p>時間: {{data.releaseTime}}</p>
					</div>
					<div class=" p-2" v-html="data.conent"></div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<!-- <button type="button" class="btn btn-primary">Understood</button> -->
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="errCard bg-info" style="border: 2px solid #fff">
		<h2 class="text-success p-2">訊息</h2>
		<div class="text-success p-2">
            <p>作者: {{data.author}}</p>
            <p>標題: {{data.title}}</p>
            <p>時間: {{data.releaseTime}}</p>
        </div>
		<div class="text-success p-2" v-html="data.conent"></div>
		<button type="button" style="position: relative; top: 10%;
          left: 65%;" class="btn btn-outline-primary text-white" @click="$emit('active')">
			關閉
		</button>
	</div> -->
</template>
<script setup>
	defineProps({
		data: Object
	})

	defineEmits(['active'])
</script>
<style lang="scss">
	/* .errCard {
		width: 500px;
		height: 600px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
		overflow-y: overlay;
	} */
	img {
		width: 100%;
		height: 300px;
	}
</style>