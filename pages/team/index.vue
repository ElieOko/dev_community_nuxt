<template>
    <div>
        <h2>Team</h2>
        <team v-for="team_list in team_odc" :lastName="team_list.lastName"/>
    </div>
</template>

<script>
import { data_team } from '~/composable/lib/data';
import team from "~/components/pages/team.vue"
export default {
    components:{team},
    data(){
        return {
            team_odc:data_team
        }
    }
}
</script>