const list = document.querySelector("ul");
            const ipt = document.querySelector("input");
            const btn = document.querySelector("button");
            
            btn.addEventListener('click', () => {
                const chapter = ipt.value;
                ipt.value = '';
                        
                const liElmt = document.createElement('li');
                const spn = document.createElement('span');
                const delBtn = document.createElement('button');
                
                liElmt.appendChild(spn);
                spn.textContent = chapter;
                liElmt.appendChild(delBtn);
                delBtn.textContent = 'X';
                list.appendChild(liElmt);

                delBtn.addEventListener('click', () => {

                    list.removeChild(liElmt);

                })

                ipt.focus();
            });


