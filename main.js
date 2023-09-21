
			// document 
			
			// اول مشروع
			// CRUD
			// C => Create   اضافة البينات
			// R => Read     عرض البينات للاقراءه
			// U => Update   تعديل البينات 
			// D => Delete   حذف البينات
			//    ميزة تغير التصميم
			//	  ميزة حفظ البينات في المتصفح 

			
			
			let tasks = [
				{
					"title": "قراءة كتاب",
					"date": "27/8/2024",
					"isDone":false,
				},
				{
					"title": "برمجة",
					"date": "28/8/2024",
					"isDone":false,
				},
				{
					"title": "تصميم المواقع",
					"date": "29/8/2024",
					"isDone":false,
				},
				{
					'title':'انواع البينات',
					'date':'30/8/2024',
					"isDone":false,
				},
				
			];
			//============= JSON.parse ============
			function getTasksFromStorage(){
				let retrievedTasks = JSON.parse(localStorage.getItem('tasks'))
				if(retrievedTasks == null){
					tasks = []
				}else{
					tasks = retrievedTasks
				}
			}
			 getTasksFromStorage()
			// Read     عرض البينات للاقراءه
		 function fillTasksThePage(){
			document.getElementById('tasks').innerHTML = '';
			let index=0;
		
			for(let task = 0; task < tasks.length; task++){
				let content =`
					 <div class='task ${tasks[task].isDone?'done':''} '>
							      <div style='width:60%;'>
								       <h2> ${tasks[task].title} </h2>
									   <div><span> ${tasks[task].date}</span> </div>
								  </div> 
								  <div style='width:40%;display:flex;justify-content:space-between;align-items:center; '>
								    <button onclick='editTask(${index})'class='circular'style='background:red;color:#fff; '><i  class="fa-solid fa-envelope"></i> </button>
									${task.isDone ?` 
										  <button onclick='completeTask(${index})' class='circular'style='background:green;color:#fff;'> X </i> </button>
										`: ` <button onclick='completeTask(${index})' class='circular'style='background:green;color:#fff;'> <i class="fa-regular fa-face-smile fa-fw"></i> </button>`}
															  
								    <button onclick='deleteTask(${index++})' class='circular'style='background:blue;color:#fff;'> <i class="fa-solid fa-trash delete"></i> </button>
								  </div>
					</div>
			`;
			
		
			document.getElementById('tasks').innerHTML += content ;
	
		 }}
		
			fillTasksThePage()

			// Create   اضافة البينات
			 document.getElementById('add-btn').addEventListener('click',function(){
			  let taskName = prompt(' عنوان المهمه')
              let tData =`
			        ${new Date().getDate()} /
					${new Date().getMonth()+1} /
					${new Date().getFullYear()} || 
					${new Date().getHours()}: 
					${new Date().getMinutes()}

					`;

					
			  	let taskobj ={
					"title":taskName,
					"date":tData,
					"isDone":false,
				}
				tasks.push(taskobj);
				storeTasks()
				fillTasksThePage()
			 });
		   // Delete   حذف البينات
			function deleteTask(index){
			let task =tasks[index] 	
			let isConfirmed =confirm(`  هل انت متأكد من حذف : ${task.title}`);
				if(isConfirmed){
				tasks.splice(index,1)
				storeTasks()
				fillTasksThePage()	
				}
			}
			// Update   تعديل البينات 
			function editTask(index){
				let task =tasks[index] 
				let edit = prompt("تعديل عنوان المهمه ",task.title);
				if(edit){
				task.title = edit
				storeTasks()
				fillTasksThePage()
				}				
			}
			//isDone "true false"
			function completeTask(index){
				let task =tasks[index] 
					task.isDone = !task.isDone
					storeTasks()
				    fillTasksThePage()
			}
			// ====================== JSON.stringify =================
				function storeTasks(){
					let tasksString = JSON.stringify(tasks)
					localStorage.setItem('tasks',tasksString)
				}
			
			
			
			
			
			
			
			
			
			
	