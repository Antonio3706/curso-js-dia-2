import{series, task, scr, dest} from "gulp";
import babel from 'gulp-babel';

function task_1(done){
    console.log('*** Hola desde Gulp ***');
    done;
}

function task_2(done){
    console.log('*** Segundo Hola desde Gulp ***');
    done;
}

function babelTask(){
    const bableOptions={
        presets: ["@babel/preset-env"],
    };
    return scr("scr/**/*.js")
        .pipe(babel(bableOptions))
        .pipe(dest("dest"));
}

export { task_1, task_2};
export default series(task_1, task_2);