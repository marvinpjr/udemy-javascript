/* Closures */

function interviewQuestion(job){
    return function(name){
        switch (job)
        {
            case 'designer': console.log(name + ', can you please explain what UX design is?'); break;
            case 'teacher': console.log('What subject do you teach, ' + name + '?'); break;
            default: console.log('Hello, ' + name + ', what do you do?'); 
        }
    }
}

interviewQuestion('software developer')('Sue');
interviewQuestion('teacher')('Bob');
interviewQuestion('designer')('Billy');