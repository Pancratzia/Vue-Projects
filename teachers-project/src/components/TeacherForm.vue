<template>
    <section>
        <h3>Añadir Profesor</h3>

        <div>
            <label for="name">Nombre</label>
            <input id="name" type="text" placeholder="Nombre" v-model="teacher.teacherName" />
        </div>

        <div>
            <label for="apellidos">Apellidos</label>
            <input id="apellidos" type="text" placeholder="Apellidos" v-model="teacher.surnames" />
        </div>

        <div>
            <label for="dninif">DNI/NIF</label>
            <input id="dninif" type="text" placeholder="DNI/NIF" v-model="teacher.dni" />
        </div>

        <div>
            <label for="materias">Materias</label>
            <input id="materias" type="text" placeholder="Materias" v-model="subject" />

            <button @click="addSubject">Anadir</button>

            <ul v-if="teacher.subjects.length > 0">
                <li v-for="(subject, index) in teacher.subjects" :key="index">{{ subject }} <button @click="removeSubject(index)">x</button></li>
            </ul>
        </div>

        <div>
            <input type="checkbox" name="documentacionEntregada" id="documentacionEntregada" v-model="teacher.doc" />
            <label for="documentacionEntregada">Documentación entregada</label>
        </div>

        <button @click="handleAddTeacher">Guardar</button>
    </section>

    <section v-if="teachers.length > 0">
        <h3>Listado de Profesores</h3>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI / NIF</th>
                    <th>Materias</th>
                    <th>Documentación</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(teacher, index) in teachers" :key="index">
                    <td>{{ teacher.teacherName }}</td>
                    <td>{{ teacher.surnames }}</td>
                    <td>{{ teacher.dni }}</td>
                    <td>{{ teacher.subjects.join(', ') }}</td>
                    <td>{{ teacher.doc ? 'Si' : 'No' }}</td>
                </tr>
            </tbody>
        </table>
    </section>

</template>

<script lang="ts" setup>

import { ref, Ref } from 'vue';

interface ITeacher {
    teacherName: string;
    surnames: string;
    dni: string;
    subjects: string[];
    doc: boolean;
}

let initialTeacher: ITeacher = ({
    teacherName: '',
    surnames: '',
    dni: '',
    subjects: [],
    doc: false
});

let teacher: Ref<ITeacher> = ref({ ...initialTeacher });



const teachers: Ref<Array<ITeacher>> = ref([]);

let subject: Ref<string> = ref('');

const addSubject = () => {
    teacher.value.subjects.push(subject.value);
    subject.value = '';
}

const removeSubject = (index: number) => {
    teacher.value.subjects.splice(index, 1);
}

const handleAddTeacher = () => {
    teachers.value.push({
        teacherName: teacher.value.teacherName,
        surnames: teacher.value.surnames,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc
    });
    
    teacher.value = { ...initialTeacher, subjects: [] };
}

</script>

<style scoped></style>