<template>
    <div class="requirements-root">
        <div class="requirements-text">
            <h1>Requirements</h1>
        <p>Design a system to control the Biscuit Machine to the following specification:</p>
        <ul>
            <li>When switched on, the machine must wait for the oven to warm up before starting the conveyor belt.</li>
            <li>Biscuits must be cooked at a temperature of 220 - 240°C (the oven will overheat if the heating element is on all the time).
</li>
            <li>If the operator selects “Pause", all movement must be stopped immediately but the oven should be kept heated.</li>
            <li>When “Off” is selected, the machine should be shut down leaving nothing on the conveyor belt.</li>
        </ul>
        </div>
        <div class="requirements-table-root">
            <table>
                <tr>
                    <th>Device</th>
                    <th>Inputs</th>
                    <th>Outputs</th>
                </tr>
                <tr>
                    <td>Switch</td>
                    <td>None</td>
                    <td>On / Off / Pause</td>
                </tr>
                <tr>
                    <td>Motor</td>
                    <td>On / Off</td>
                    <td>One "pulse per revolution"</td>
                </tr>
                <tr>
                    <td>Extruder</td>
                    <td>Pulse</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td>Stamper</td>
                    <td>Pulse</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td>Oven</td>
                    <td>Heating Element On / Off</td>
                    <td>Temperature</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Requirements'
}
</script>

<style>
  .requirements-root {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      
      width: 800px;
      margin: auto;
      
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 0.85em;
  }

  .requirements-text {
      text-align: left;
  }

  .requirements-text li {
      margin: 20px 0px;
  }

  .requirements-table-root table, .requirements-table-root td, .requirements-table-root th {
    border: 1px solid #999;
  }

  .requirements-table-root table {
    margin-top: 20px;
    border-collapse: collapse;
  }
</style>