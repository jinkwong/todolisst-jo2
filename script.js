document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('icon-button');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority-select');
    const outputContainer = document.getElementById('output-container');

    const taskInputWarning = document.createElement('div');
    taskInputWarning.style.color = 'red';
    taskInputWarning.style.display = 'none';
    taskInputWarning.textContent = 'Task cannot be empty!';
    taskInput.parentNode.insertBefore(taskInputWarning, taskInput.nextSibling);

    button.addEventListener('click', () => {
        let taskValue = taskInput.value.trim();
        if (taskValue === '') {
            taskInputWarning.style.display = 'block';
            return;
        } else {
            taskInputWarning.style.display = 'none';
        }

        const priorityValue = prioritySelect.value;

        const newBox = document.createElement('div');
        newBox.classList.add('output-box');

       
        let textColor;
        switch (priorityValue) {
            case 'Low':
                textColor = 'green';
                break;
            case 'Medium':
                textColor = 'yellow';
                break;
            case 'High':
                textColor = 'red';
                break;
            
        }

        newBox.innerHTML = `<h2 style="color: ${textColor};">Task: ${taskValue}</h2><h3 style="color: ${textColor};">Priority: ${priorityValue}</h3>`;
        outputContainer.appendChild(newBox);

        newBox.addEventListener('mouseover', () => {
            newBox.style.transform = 'scale(2.0)';
            newBox.style.filter = 'grayscale(0%)';
            newBox.style.animation = 'float 1.2s infinite alternate';
        });

        newBox.addEventListener('mouseout', () => {
            newBox.style.transform = 'scale(1)';
            newBox.style.filter = 'grayscale(100%)';
            newBox.style.animation = 'none';
        });

        newBox.addEventListener('click', () => {
            const directions = ['fly-out-up', 'fly-out-down', 'fly-out-left', 'fly-out-right'];
            const randomDirection = directions[Math.floor(Math.random() * directions.length)];
            const animationDuration = 4.0;

            newBox.style.animation = `${randomDirection} ${animationDuration}s forwards`;
            setTimeout(() => {
                outputContainer.removeChild(newBox);
            }, animationDuration * 1000);
        });
    });
});
