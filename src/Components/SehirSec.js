import React, {useState} from 'react'
import { Select } from 'semantic-ui-react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

const cityOptions = [
  { key: '81', value: '81', text: 'Düzce' },
  { key: '14', value: '14', text: 'Bolu' },
  { key: '54', value: '54', text: 'Sakarya' },
  { key: '67', value: '67', text: 'Zonguldak' },
]

function SehirSec (){

    const [sehir, setSehir]= useState(!localStorage.getItem("city") ? localStorage.getItem("city") : "");


    function handleChange (e) {
        setSehir(e.target.value)
		localStorage.setItem("city", e.target.value);
    }
  
    const value  = sehir;
      return (
        <Grid columns={2}>
          <Grid.Column>
            <Dropdown
              onChange={handleChange}
              options={cityOptions}
              placeholder='Choose an option'
              selection
              value={value}
            />
          </Grid.Column>
          <Grid.Column>
            <Segment secondary>
              <pre>Current value: {value}</pre>
            </Segment>
          </Grid.Column>
        </Grid>
      )
}

export default SehirSec;