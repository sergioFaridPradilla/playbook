const MissionCommander = require("./../app/missionCommander");

describe("Unit Test for MissionCommander class ", () => {
    test('Caso de prueba 1', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa")
    })
})