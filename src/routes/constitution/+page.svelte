<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree, oneFour;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne, threeTwo, threeThree;
    let four, fourOne, fourTwo;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;
    let eight, eightOne, eightTwo, eightThree;
    let nine, nineOne, nineTwo;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 1.0em;
        line-height: 1.1em;
            }

    h6 {
        margin-left: 2em;
        font-size: 0.8em;
        line-height: .5em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .right2 {
        text-align: right;
        font-size: 0.8em;
        font-weight: bold;
    }


    .positionMaximums td {
        min-width: 1em;
        font-size: 0.8em;
        font-weight: bold;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #006b0e;
    }

    p {
        color: rgb(101, 100, 102);
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">THE LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Section 1: Changes from previous season. </h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>1.1 End of Season </h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>1.2 IR Slot Increase</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightThree)}>1.3 FAAB Bidding</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 2: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>2.1 Positional Breakdown</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneOne)}>2.1.1 Position Maximums</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>2.2 Trading</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoOne)}>2.2.1 Trade Collusion</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoTwo)}>2.2.2 Lending Players Prohibition</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoThree)}>2.2.3 Trade Deadline</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFour)}>2.2.4 Trade Restrictions</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFive)}>2.2.5 Veto/Trade Process</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>2.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 3: Drafting</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>3.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>3.2 Rookie Drafts</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>3.3 Draft Day Trades</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 4: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>4.1 Extenuating Circumstances</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>4.2 Voting on Scoring System</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>4.3 Points Structure</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 5: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>5.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>5.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 6: Code of Contact</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>6.1 Good Sportsmanship</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>6.2 Collusion</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>6.3 Tanking</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFour)}>6.4 Churning</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFive)}>6.5 Inactivity</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 7: Replacing Managers</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>7.1 Removing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Replacing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Replacement Incentive</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 8: League Finances</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>8.1 League Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwo)}>8.2 Payout</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenThree)}>8.3 Raising Dues</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Section 9: Amendments</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineOne)}>9.1 Off-Season Changes</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineTwo)}>9.2 In-Season Changes</h4>
    
    <hr />
    
        <h2 class="sectionHeading" bind:this={eight}>Section 1 Changes from Previous Season  </h2>
        <p> These were voted on and passed by a majority. All changes will always need a majority vote to pass, and will always be listed in Section 1 of this constitution the first year they are implented. Changes will not be made mid season unless extenuating circumstances occur, that causes league breaking issues.    
    
    <h3 bind:this={eightOne}>1.1 End of Season</h3>
    <p>Starting in 2023 the Season will now last 17 weeks, instead of 18 weeks like in 2022. The playoffs will start week 15 and The Championship match and 3rd place match will take place Week 17.</p>
    <h6 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>- See Section "5.1 Playoffs"</h6>

    <h3 bind:this={eightTwo}>1.2 IR Slot Increase</h3>
    <p>The IR slots will be increased from 2 to 3 slots for the 2023 season and going forward. </p>
    <h6 class="noUnderscore clickable" on:click={() => goToSection(oneFour)}>- See Section "2.1 Positional Breakdown; 3 IR Slots"</h6>

    <h3 bind:this={eightThree}>1.3 FAAB Bidding</h3>
    <p>We have decided to go to FAAB bidding style of waivers instead of standard rolling waivers. </p>
    <h6 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>-See Section "2.3 FAAB Bidding/Waiver Wire"</h6>
    
    <h2 class="sectionHeading" bind:this={one}>Section 2 Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>2.1 Positional Breakdown</h3>
    
    <p class="underscore">32 Total Players</p>
    <ul>
        <li>10 Starters Positions</li>
        <li>15 Bench Positions</li>
        <li>3 Injured Reserve Slots</li>
        <li>4 Taxi Squad</li>
    </ul>
    
    <p class="underscore">Starters (10 players)</p>
     <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>SUPERFLEX (RB/WR/TE/QB)</li> 
    </ul>
    
    <p class="underscore">15 Bench Positions</p>

    <p class="underscore" bind:this={oneFour}>3 IR Slots </p>
        <ul>
            <li>Player must be labeled as IR, Out, or Covid in the Sleeper App.</li>
            <li>The Sleeper App will not let you set your lineup if a player is on the IR without the correct designation.</li>
            <li>If a manager is caught attempting to hold players on the Injured Reserve with the incorrect desgniation to avoid dropping a player, they will recieve a warning and will be expected to correct their roster.</li>
            <li>If said manager does not fix their roster, then the commissioner will remove the player that put the manager over the roster limit. If its a free agency day, then the manager with highest waiver priority will be allowed to pickup said player.</li>
            <li>Generally the commissioner (StickyPicky) will do everything in his power to have any roster situations settled by Thurday morning. In hopes that everyone has time to adjust accordingly.</li>
            <li>The commissioner (StickyPicky) will do everything in his power to try and catch these things, however if you notice an issue with a roster, please direct message StickyPicky on the sleeper app.</li>
            <li>Try to avoid bringing it up in the main chat, just let StickyPicky know please so he can take care of it. </li>
        </ul>
    
    <p class="underscore"> Taxi Squad 
        <ul>
            <li>Each team has a Taxi Squad for 4 rookies.</li>
            <li>You can move players into the taxi squad until the regular season starts. Once the deadline passes, you may no longer move players into taxi squad.</li>
            <li>You can always move players from the taxi squad to your main roster, however you will have to drop a player from your bench unless there is already space.</li>
            <li>Players with more than 2 years of experience in the NFL must be activated from the Taxi Squad.</li>
        </ul>
    
 <h4 bind:this={oneOneOne}>2.1.1 Position Maximums</h4>
        
        <div class="subBlock">
            <table class="positionMaximums">
                <tbody>
                    <tr><td>QB</td><td class="right">2 active, 5 total</td></tr>
                    <tr><td>RB</td><td class="right">20</td></tr>
                    <tr><td>WR</td><td class="right">20</td></tr>
                    <tr><td>TE</td><td class="right">10</td></tr>
                </tbody>
            </table>
        </div>

<h3 class="subSectionHeading" bind:this={oneTwo}>2.2 Trading</h3>
    
    <p>Trading of players and draft picks (up to 3 drafts away only if paid for the year being traded) are allowed and encouraged. Trades will process immediately but will be reversed if vetoed or under investigation for collusion. Tradable assets include players, draft picks, and FAAB $.</p>
    
    <h4 bind:this={oneTwoOne}>2.2.1 Trade Collusion</h4>
    <div class="subBlock">
        <p>If any owners are suspected of accepting bribes/offering bribes to enhance their/another owners team via trade, trading any assets other than fantasy players, draft picks, FAAB $, or otherwise found guilty of engaging in any form of collusion*, all parties involved in the trade will be susceptible to punishment. The punishments will go as followed:</p>
        <ul>
            <li>First Offense – Immediate reduction of FAAB budget by 80%.</li>
            <li>Second Offense – Immediate freeze on all transaction types for the next 18 weeks of regular season and playoff fantasy football games, including trades and waiver wire bids.</li>
            <li>Third Offense – A league meeting of all members not involved in any of the improper trades/activity in question will take place to discuss next steps.</li>
        </ul>

        <p>All trades that are found guilty of collusion, will be reversed/denied. If the trade had affected the outcome of previous games, the results of those games will be rescored.  </p>

        <p>*Collusion includes the organizing of veto votes against an acceptable trade.</p>

        <p>The commissioner will err on the side of letting owners manage their teams the way they see fit. Any collusion will need to be clear. The commissioner reserves the right to step in and at the very least assess the thinking of any team involved in a heavily lop-sided trade. </p>
    </div>

    <h4 bind:this={oneTwoTwo}>2.2.2 Lending Players Prohibition</h4>
    <div class="subBlock">
        <p>Any player traded from a team may not be re-acquired via trade within 6 weeks of the original trade. Any teams involved in this behavior will be subject to the aforementioned collusion punishments.</p>
    </div>
    
    <h4 bind:this={oneTwoThree}>2.2.3 Trade Deadline</h4>
    <div class="subBlock">
        <p>The trade deadline will be set for week 13. All trades must be accepted prior to the end of the final game of week 13.</p>
    </div>
    
    <h4 bind:this={oneTwoFour}>2.2.4 Trade Restrictions</h4>
    <div class="subBlock">
        <p>You will not be able to trade draft picks that are more than 3 drafts away, and you will only be allowed to make those trades if the year is paid in full.  For example, during the 2023 season you cannot trade any picks in or after the 2027 draft. FAAB money may only be traded from the current season.</p>
    </div>
    
    <h4 bind:this={oneTwoFive}>2.2.5 Veto/Trade Process</h4>
    <div class="subBlock">
        <p>Trade Vetos are off within the sleeper app, so trades will go through instantly. If there is suspected collusion within a trade, a vote will take place deciding the matter. A total of 7 veto votes are required to veto a trade. Vetoes are only appropriate in instances of CLEAR collusion or an egregious mismatch of value (i.e. CMC for a backup kicker). Not liking a trade does not warrant a veto.</p>
    </div>
    
    
    
    <h3 bind:this={oneThree}>2.3 FAAB Bidding/Waiver Wire</h3>
    
    <p class="underscore">FAAB Bidding</p>
    <ul>
        <li>Each team will begin the season with $100.</li>
        <li>$0 bids are allowed.</li>
        <li>Bids will process everynight at 03:00:00 AM EST Timezone</li>
        <li>When a player is dropped they are put on the Waivers for 24 hours.</li>
        <li>Players on waivers will be locked upon the start of their week's game, this will clear Tuesday at 3 AM EST Timezone.</li>
        <li>Thursday and Sunday will be "waiver into free agency" days. For Example: at 3 AM bids will process for the day, and then any player that hasnt been dropped will be on the Free Agency.</li>
        <li>FAAB budget will reset each season upon season renewal.</li>
    </ul>

    <p class="underscore">Waiver Schedule</p>
    <div class="subBlock">
        <table class="positionMaximums">
            <tbody>
                <tr><td>Tuesday</td><td class="right2">FAAB Waivers- bids process at 3 AM EST</td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td>Wednesday</td><td class="right2">FAAB Waivers- bids process at 3 AM EST</td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td>Thursday</td><td class="right2">FAAB Waivers to Free Agency, bids process at 3 AM EST and then Free Agency until 3 AM Friday</td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td>Friday</td><td class="right2">Players return to Waivers at 3 AM EST. Bids can be put in to process Saturday at 3 AM </td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td>Saturday</td><td class="right2">FAAB Waivers- bids process at 3 AM EST</td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td>Sunday</td><td class="right2">FAAB Waivers to Free Agency, bids process at 3 AM EST and then Free Agency until 3 AM Monday</td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td></td><td class="right"></td></tr>
                <tr><td>Monday</td><td class="right2">Players will return to Waivers at 3 AM EST. Bids can be put in to process Tuesday at 3 AM</td></tr>
            </tbody>
        </table>
    </div>

    
    
    <h2 class="sectionHeading" bind:this={two}>Section 3 Drafting</h2>
    
    <h3 bind:this={twoOne}>3.1 Draft Order</h3>
    <p>The draft order each year will be a snake draft. Using MaxPF (Max Points For) for non playoff teams, and order of finish for playoff teams.</p>

    <h3 bind:this={twoTwo}>3.2 Rookie Drafts</h3>
    <p>Rookie drafts will consist of 5 round of drafting, with 5 minutes alotted for each pick. To make room for the incoming players, benches will be expanded by (7) spots. These spots will be removed in mid-August, at which point you will need to have cut the necessary players.</p>
    <p>Any spots not filled during the draft, can be filled immediately afterwards from the waiver wire.</p>
    
    <h3 bind:this={twoThree}>3.3 Draft Day Trades</h3>
    <p>If a trade is being made during the draft, one or both parties can alert the commissioner to pause the draft to allow for extra time to negotiate the trade. However please be considerate of your leaguemates time.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 4 Scoring System</h2>

    <h3 bind:this={threeOne}>4.1 Extenuating Circumstances</h3>
    <p>In the event of the NFL canceling a game, the commissioner will manually calculate the scores for the owners affected. This will be done using the average points per game. </p>
    
    <ul>
        <li>For example:</li>
        <li>Josh Allens game gets canceled 5 min into his game.</li>
        <li>He has averaged 24.16 FPTS/GAME (Fantasy points per game).</li>
        <li>We would subtract any points he had recieved for the 5 min of play from the total points from that week.</li>
        <li>We then will add the 24.16 to the total points</li>
    </ul>
   
    <p> We will do this for all players affected by the game being canceled.</p>

    <h3 bind:this={threeTwo}>4.2 Voting on Scoring System</h3>
    <p>The scoring system will not change without a majority league vote. A vote for scoring change can only be done in the off season. Unless some sort of league breaking event happens.</p>

    <h3 bind:this={threeThree}>4.3 Points Structure</h3>
    <h4>Passing</h4>
    <div class="subBlock">
        <table class="positionMaximums">
            <tbody>
                <tr><td>Passing Yards</td><td class="right">1 point every 25 yards</td></tr>
                <tr><td>Passing TD</td><td class="right">6</td></tr>
                <tr><td>Passing 1st Down</td><td class="right">.5</td></tr>
                <tr><td>2-PT Conversion</td><td class="right">2</td></tr>
                <tr><td>Pass Intercepted</td><td class="right">-1</td></tr>
                <tr><td>Pick 6 Thrown</td><td class="right">-6</td></tr>
                <tr><td>Pass Completed</td><td class="right">.25</td></tr>
                <tr><td>Incomplete Pass</td><td class="right">-.15</td></tr>
                <tr><td>40+ YD Completion Bonus</td><td class="right">1</td></tr>
                <tr><td>40+ YD Pass TD Bonus</td><td class="right">2</td></tr>
                <tr><td>50+ YD Pass TD Bonus</td><td class="right">3</td></tr>
            </tbody>
        </table>
    </div>

    <h4>Rushing</h4>
    <div class="subBlock">
        <table class="positionMaximums">
            <tbody>
                <tr><td>Rushing Yards</td><td class="right">1 point every 10 yards</td></tr>
                <tr><td>Rushing TD</td><td class="right">6</td></tr>
                <tr><td>Rushing 1st Down</td><td class="right">1</td></tr>
                <tr><td>2-PT Conversion</td><td class="right">2</td></tr>
                <tr><td>Rush Attempts</td><td class="right">.25</td></tr>
                <tr><td>40+ YD Rush Bonus</td><td class="right">1</td></tr>
                <tr><td>40+ YD Rush TD Bonus</td><td class="right">2</td></tr>
                <tr><td>50+ YD Rush TD Bonus</td><td class="right">3</td></tr>
            </tbody>
        </table>
    </div>

    <h4>Recieving</h4>
    <div class="subBlock">
        
        <table class="positionMaximums">
            <tbody>
                <tr><td>Reception</td><td class="right">1</td></tr>
                <tr><td>Receiving Yards</td><td class="right">1 point every 10 yards</td></tr>
                <tr><td>Receiving TD</td><td class="right">6</td></tr>
                <tr><td>Receiving 1st Down</td><td class="right">.5</td></tr>
                <tr><td>2-PT Conversion</td><td class="right">2</td></tr>
                <tr><td>5-9 Yard Reception Bonus</td><td class="right">.1</td></tr>
                <tr><td>10-19 Yard Reception Bonus</td><td class="right">.25</td></tr>
                <tr><td>20-29 Yard Reception Bonus</td><td class="right">.5</td></tr>
                <tr><td>30-39 Yard Reception Bonus</td><td class="right">.75</td></tr>
                <tr><td>40+ Yard Reception Bonus</td><td class="right">1</td></tr>
                <tr><td>40+ YD Reception TD Bonus</td><td class="right">2</td></tr>
                <tr><td>50+ YD Reception TD Bonus</td><td class="right">3</td></tr>
                <tr><td>Reception Bonus: RB</td><td class="right">.75</td></tr>
                <tr><td>Reception Bonus: TE</td><td class="right">1.25</td></tr>
            </tbody>
        </table>
    </div>

    <h4>Misc/Bonuses</h4>
    <div class="subBlock">
        <table class="positionMaximums">
            <tbody>
                <tr><td>Player Punt Return Yards</td><td class="right">1 point every 5 yards</td></tr>
                <tr><td>Player Kick Return Yards</td><td class="right">1 point every 15 yards</td></tr>
                <tr><td>Fumble Lost</td><td class="right">-2</td></tr>
                <tr><td>Fumble Recovery TD</td><td class="right">6</td></tr>
                <tr><td>100-199 YD Rushing Game</td><td class="right">6</td></tr>
                <tr><td>200+ YD Rushing Game</td><td class="right">14</td></tr>
                <tr><td>100-199 YD Receiving Game</td><td class="right">6</td></tr>
                <tr><td>200+ YD Receiving Game</td><td class="right">14</td></tr>
                <tr><td>300-399 YD Passing Game</td><td class="right">5</td></tr>
                <tr><td>400+ YD Passing Game</td><td class="right">10</td></tr>
                <tr><td>100-199 Combined Rush + Rec Yards</td><td class="right">4</td></tr>
                <tr><td>200+ YD Combined Rush + Rec Yards</td><td class="right">10</td></tr>
            </tbody>
        </table>
    </div>


    <h2 class="sectionHeading" bind:this={four}>Section 5 Postseason</h2>
    
    <h3 bind:this={fourOne}>5.1 Playoffs</h3>
    <h4>Championship</h4>
    <ul>
        <li>At the end of the season, 6 teams will make the playoffs.</li>
        <li>The first round of the playoffs will commence in week 15.</li>
        <li>Each playoff match will last one week, and the winner will advance to the next round.</li>
        <li>Week 17 will host the Championship game, and will be the last week of the season.</li>
    </ul>

    <h4>Toilet Bowl</h4>
    <ul>
        <li>At the end of the season, the bottom 4 teams will play to avoid battling for last place.</li>
        <li>The LOSING team from each round gets "flushed" to the next round.</li>
        <li>Each playoff match will last one week. The winner will place and be done, whle the loser will advance to the next round.</li>
        <li>Week 16 will host the The Toilet Bowl, and will be the last week of the season for the players in the bracket.</li>
    </ul>

    <h3 bind:this={fourTwo}>5.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Head 2 Head Record</li>
        <li>Points For</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 6 Code of Conduct</h2>
    
    <h3 bind:this={fiveOne}>6.1 Good Sportsmanship</h3>
    <p>All owners are expected to set their best possible lineup each week and to attempt to win every game to the best of their ability. As explained below, collusion, tanking, churning, and inactivity are violations of this code of conduct.</p>

    <h3 bind:this={fiveTwo}>6.2 Collusion</h3>
    <p>Collusion is prohibited. Collusion occurs when two teams work together against the rest of the league, or one team makes moves to benefit another team without trying to improve its own position. Collusion undermines the ethic of good sportsmanship as well as the competitive balance of the league. Examples include: one-sided trades; dropping a player so that another team may pick up that player; transactions that involve future considerations or preferential treatment; and swapping players to cover bye weeks or injury.</p>

    <h3 bind:this={fiveThree}>6.3 Tanking</h3>
    <p>No team may intentionally leave starting roster spots empty. Any evidence of intentionally leaving roster spots empty in order to improve your draft position may be subject to punishment, including but not limited to the forfeiture of draft selections.</p>

    <h3 bind:this={fiveFour}>6.4 Churning</h3>
    <p>Churning occurs when a team adds and drops players on waivers for the sole purpose of making them unavailable to other teams, which is prohibited.</p>

    <h3 bind:this={fiveFive}>6.5 Inactivity</h3>
    <p>A team is considered inactive if there are inactive, injured, or bye week players in the starting lineup, or empty lineup positions, and no changes have been made to the roster. The commissioner will contact an owner whose team is inactive for two or more weeks in a row. If the team remains inactive, the commissioner reserves the right to make changes to fill the roster and eventually hold a vote to reassign ownership of the team for purposes of competitive balance.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 7 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>7.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league chat, trade offers, and the waiver wire, is strongly encouraged but generally NOT grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>7.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commissioners will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>
    
    <h3 bind:this={sixThree}>7.3 Replacement Incentive</h3>
    <p>In the event that a manager chooses to quit the league or is removed by a comissioner, an incoming manager may be offered a 50% reduction on their first year buy-in, depending on the status of the team. If the year isnt already paid for.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 8 League Finances</h2>
    
    <h3 bind:this={sevenOne}>8.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through <a href="https://www.leaguesafe.com/league/3949641">LeagueSafe</a> and collection will be sent out no later than the first of August. All managers must be fully paid up before the start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be added to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>8.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 7}$</li>
        <li>2nd place: {dues * 2}$</li>
        <li>3rd place: {dues}$</li>
    </ul>
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the winner's payout. Similarly, if new managers come into the league and the payout is smaller, the difference will come out of the winner's prize.</p>
    
    <h3 bind:this={sevenThree}>8.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost is reccomended.</p>

    <h2 class="sectionHeading" bind:this={nine}>Section 9 Amendments</h2>
    
    <h3 bind:this={nineOne}>9.1 Off-Season Changes</h3>
    <p>Any owner may suggest rule modifications to the commissioner during the league’s offseason. A simple majority vote of all owners may amend this constitution.</p>

    <h3 bind:this={nineTwo}>9.2 In-Season Changes</h3>
    <p>The Commissioner may make in-season rule changes only in exceptional circumstances, with input of the league owners.</p>




</div>