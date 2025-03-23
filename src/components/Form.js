import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            service: '',  
            dryerVent : '', 
            noOfFurnace : '',
            furnaceType : '', 
            areaSQFT : '', 
            exitPointOfDryerVent : '',
            disinfectant : '',
            zip : '',
            additionalPrice : 0,
            airDuctPrice : 0,
            disinfectantPrice : 0,
            dryerVentPrice : 0,
            totalPrice : 0
        };
    }    

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
        if(this.state.service === "Residential" && this.state.areaSQFT){
            this.handleFetch();
        }
    }

    handleFetch = () => {
        setTimeout(async () => {
            fetch('http://localhost:8000/api/getQuote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"areaSQFT" : this.state.areaSQFT, "exitPointOfDryerVent" : this.state.exitPointOfDryerVent, "furnaceType" : this.state.furnaceType, "noOfFurnace" : this.state.noOfFurnace, "disinfectant" : this.state.disinfectant, "zipcode" : ""})
            }).then(response => {
                if (response.ok) {
                    return response.json().then(res => {
                    this.setState({
                        airDuctPrice: res.data.airDuctPrice,
                        disinfectantPrice : res.data.disinfectantPrice,
                        dryerVentPrice : res.data.dryerVentPrice,
                        totalPrice : res.data.totalPrice
                    })
                    });
                }
            });
        },500)
    }

    render() {
        const { service, dryerVent, noOfFurnace,disinfectant,airDuctPrice, disinfectantPrice,dryerVentPrice,totalPrice} = this.state;
    return (
        <section>
            <div className="">
                <div className="fill-form form-box">
                    <div id="box-title">
                        <h4 className="main-form-text">GET A QUOTE OR SCHEDULE NOW!</h4>
                    </div>
                    <form>
                        <div className="mt-3">
                            <select className="form-select" name="service" onChange={this.handleChange.bind(this)}>
                                <option selected>Service Needed*</option>
                                <option value="Residential">Residential Air Duct Cleaning</option>
                                <option value="Insulation">Insulation</option>
                                <option value="Aeroseal">Duct Sealing powered by Aeroseal®</option>
                                <option value="DuctArmor">Duct Lining Powered by Duct Armor®</option>
                            </select>
                        </div>
                        <div className="row mt-3"> 
                            <div className="form-group col-6">
                                <input type="text" className="form-control" name="firstName" value="" placeholder="First Name*"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="text" className="form-control" name="lastName" value="" placeholder="Last Name*"/>
                            </div>
                        </div>

                        <div className="mt-3"> 
                            <input type="text" className="form-control" name="zip" value="" placeholder="Zip*"/>
                        </div>
                        <div className="mt-3"> 
                            <input type="text" className="form-control" name="city" value="" placeholder="City*"/>
                        </div>
                        <div className="mt-3"> 
                            <input type="text" className="form-control" name="state" value="" placeholder="State*"/>
                        </div>
                        <div className="mt-3 form-floating"> 
                            <textarea class="form-control" placeholder="Address" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Address*</label>
                        </div>
                        <div className="mt-3"> 
                            <input type="text" className="form-control" name="phone" value="" placeholder="Phone*"/>
                        </div>
                        <div className="mt-3"> 
                            <input type="text" className="form-control" name="email" value="" placeholder="Email*"/>
                        </div>
                        { service === "Residential" && <>
                            <div className="mt-3 form-floating"> 
                                <textarea class="form-control" name="hear" placeholder="Write here" id="hear"></textarea>
                                <label for="hear">How did you hear about us is required*</label>
                            </div>

                            <div className="mt-3">
                                <select className="form-select" name="reschedule">
                                    <option selected>Are you rescheduling an existing appointment?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="mt-3"> 
                                <input type="number" className="form-control" name="areaSQFT" placeholder="Approx. Sq. Footage of Living Space (Not Including Basement)*" onKeyUp={this.handleChange.bind(this)}/>
                            </div>
                            <div className="mt-3">
                                <select className="form-select" name="noOfFurnace" onChange={this.handleChange.bind(this)}>
                                    <option selected>Select Number of Furnace*</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3+">3+</option>
                                </select>
                            </div>
                            { noOfFurnace === 2 && <>
                                <div className="mt-3">
                                    <select className="form-select" name="furnaceType" onChange={this.handleChange.bind(this)}>
                                        <option value="">Are your furnaces ...?*</option>
                                        <option value="Side by Side">Basement -  Side by Side</option>
                                        <option value="Different Locations and/or Floors">Different Locations and/or Floors</option>
                                    </select>
                                </div>
                            </>}
                            <div className="mt-3">
                                <select className="form-select" name="location">
                                    <option selected>Select Location of your Furnace*</option>
                                    <option value="Basement">Basement</option>
                                    <option value="Crawl Space">Crawl Space</option>
                                    <option value="Attic">Attic</option>
                                    <option value="Slab">Slab</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <select className="form-select" name="dryerVent" onChange={this.handleChange.bind(this)}>
                                    <option selected>Add Dryer Vent Cleaning?*</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            { dryerVent === 'Yes' && <>
                                <div className="mt-3">
                                    <select className="form-select" name="exitPointOfDryerVent" onChange={this.handleChange.bind(this)}>
                                        <option>Exit Point of your Dryer Vent?*</option>
                                        <option value="0-10 Feet Off the Ground">0-10 Feet Off the Ground</option>
                                        <option value="10+ Feet Off the Ground">10+ Feet Off the Ground</option>
                                        <option value="Rooftop">Rooftop</option>
                                    </select>
                                </div>
                            </>}
                            <div className="mt-3">
                                <select className="form-select" name="disinfectant" onChange={this.handleChange.bind(this)}>
                                    <option value="">Add Disinfectant?*</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </>}
                        { service === "Insulation" && <>
                            <div className="mt-3">
                                <select className="form-select">
                                    <option selected>What area are you looking to insulate?*</option>
                                    <option value="Attic">Attic</option>
                                    <option value="Basement">Basement</option>
                                    <option value="Walls">Walls</option>
                                    <option value="Ceiling">Ceiling</option>
                                    <option value="Crawl Space">Crawl Space</option>
                                    <option value="Garage">Garage</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <select className="form-select">
                                    <option selected>Are you experiencing any of the following?*</option>
                                    <option value="hot_cold_rooms">Hot/Cold Rooms</option>
                                    <option value="energy_savings">Energy Savings</option>
                                    <option value="old_insulation">Old Insulation</option>
                                    <option value="animal_damage">Animal Damage</option>
                                    <option value="new_construction">New Construction</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </>}

                        { (service === "Aeroseal" || service === "DuctArmor") && <>
                            <div className="mt-3 form-floating"> 
                                <textarea class="form-control" placeholder="Write here" id="hear"></textarea>
                                <label for="hear">How did you hear about us is required*</label>
                            </div>

                            <div className="mt-3">
                                <select className="form-select">
                                    <option selected>Are you rescheduling an existing appointment?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="mt-3"> 
                                <input type="number" className="form-control" name="areaSQFT" value="" placeholder="Approx. Sq. Footage of Living Space (Not Including Basement)*"/>
                            </div>
                            <div className="mt-3">
                                <select className="form-select">
                                    <option selected>Select Number of Furnace*</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3+">3+</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <select className="form-select">
                                    <option selected>Select Location of your Furnace*</option>
                                    <option value="Basement">Basement</option>
                                    <option value="Crawl Space">Crawl Space</option>
                                    <option value="Attic">Attic</option>
                                    <option value="Slab">Slab</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <select className="form-select">
                                    <option selected>Are you experiencing any of the following?*</option>
                                    <option value="hot_cold_rooms">Hot/Cold Rooms</option>
                                    <option value="energy_savings">Energy Savings</option>
                                    <option value="old_insulation">Old Insulation</option>
                                    <option value="animal_damage">Animal Damage</option>
                                    <option value="new_construction">New Construction</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </>}
                    </form>
                </div>
            </div>
            { service === "Residential" && <>
                <div className="container">
                    <div className="mt-3">
                        <h3>Your Quote <br></br>
                        <label><span>Air Duct Cleaning Quote: $<span id="Total">{airDuctPrice}</span></span></label><br></br>
                        { dryerVent === 'Yes' && <> <span><label><span>Dryer Vent Cleaning Quote: $<span>{dryerVentPrice}</span></span></label></span><br></br></>}
                        {disinfectant === 'yes' && <> <span><label><span>disinfectant quote: $<span>{disinfectantPrice}</span></span></label></span><br></br></>}
                        <label><span>Total: $<span id="totalservicecost">{totalPrice}</span></span></label>
                        </h3><br></br>
                    </div>
                </div>
            </>}
        </section>
    );
    }
};
export default Form;