export const roomInfo = [
    //x and y are entrance coordinates, dir is direction the arrow that points at the entrance
    //rectX, rectY, rectW, rectH form a rectangle , which is the clickable rectangle on the map

    //floor2
    //2 small rooms left of the escalator, are these even classrooms?
    //{room: "2.0", x: 90, y: 1185, dir: "left", rectX: 10, rectY: 1170, rectW: 65, rectH: 30},
    //{room: "2.1", x: 90, y: 1160, dir: "left", rectX: 10, rectY: 1145, rectW: 65, rectH: 25},
    //left rooms on top
    //some small rooms on top left might not actually be classrooms, and some commented out rooms might be classrooms
    {room: "2.010", x: 115, y: 1075, dir: "left", rectX: 10, rectY: 940, rectW: 90, rectH: 150},
    //{room: "2.3", x: 115, y: 920, dir: "left", rectX: 10, rectY: 900, rectW: 90, rectH: 40},
    //{room: "2.4", x: 115, y: 880, dir: "left", rectX: 10, rectY: 860, rectW: 90, rectH: 40},
    {room: "2.040", x: 115, y: 845, dir: "left", rectX: 10, rectY: 710, rectW: 90, rectH: 150},
    {room: "2.050", x: 115, y: 670, dir: "left", rectX: 10, rectY: 635, rectW: 90, rectH: 75},
    {room: "2.060", x: 115, y: 615, dir: "left", rectX: 10, rectY: 570, rectW: 90, rectH: 65},
    {room: "2.070", x: 115, y: 560, dir: "left", rectX: 10, rectY: 495, rectW: 90, rectH: 75},
    {room: "2.080", x: 115, y: 485, dir: "left", rectX: 10, rectY: 460, rectW: 90, rectH: 35},
    {room: "2.090", x: 115, y: 445, dir: "left", rectX: 10, rectY: 430, rectW: 90, rectH: 35},
    {room: "2.100", x: 115, y: 410, dir: "left", rectX: 10, rectY: 350, rectW: 90, rectH: 80},
    {room: "2.110", x: 115, y: 330, dir: "left", rectX: 10, rectY: 180, rectW: 90, rectH: 170},
    {room: "2.120", x: 115, y: 120, dir: "left", rectX: 10, rectY: 80, rectW: 90, rectH: 100},
    {room: "2.130", x: 115, y: 120, dir: "top", rectX: 10, rectY: 10, rectW: 120, rectH: 70},
    {room: "2.140", x: 150, y: 150, dir: "top", rectX: 130, rectY: 10, rectW: 70, rectH: 100},
    //right rooms on top
    {room: "2.16", x: 312, y: 1175, dir: "bottom", rectX: 300, rectY: 1195, rectW: 90, rectH: 110}, //todo what is the name of this room?
    {room: "2.240", x: 312, y: 955, dir: "bottom", rectX: 300, rectY: 980, rectW: 90, rectH: 110},
    {room: "2.230", x: 312, y: 955, dir: "top", rectX: 300, rectY: 820, rectW: 90, rectH: 110},
    {room: "2.220", x: 312, y: 685, dir: "bottom", rectX: 300, rectY: 710, rectW: 90, rectH: 110},
    {room: "2.210", x: 312, y: 685, dir: "top", rectX: 300, rectY: 585, rectW: 90, rectH: 85},
    {room: "2.200", x: 285, y: 475, dir: "right", rectX: 300, rectY: 465, rectW: 90, rectH: 110},
    {room: "2.190", x: 285, y: 450, dir: "right", rectX: 300, rectY: 350, rectW: 90, rectH: 115},
    {room: "2.180", x: 312, y: 320, dir: "top", rectX: 300, rectY: 185, rectW: 90, rectH: 115},
    {room: "2.170", x: 285, y: 120, dir: "right", rectX: 300, rectY: 80, rectW: 90, rectH: 105},
    {room: "2.160", x: 285, y: 120, dir: "top", rectX: 270, rectY: 10, rectW: 120, rectH: 70},
    {room: "2.150", x: 255, y: 150, dir: "top", rectX: 200, rectY: 10, rectW: 70, rectH: 100},
    //middle rooms on top
    {room: "2.520", x: 255, y: 150, dir: "bottom", rectX: 130, rectY: 170, rectW: 135, rectH: 180},//is the entrance correct?
    {room: "2.510", x: 255, y: 520, dir: "bottom", rectX: 130, rectY: 550, rectW: 135, rectH: 295}, //wrong entrance
    {room: "2.500", x: 235, y: 1170, dir: "top", rectX: 130, rectY: 870, rectW: 135, rectH: 275},
    //room just bottom left of the escalator
    //{room: "2.29", x: 90, y: 1315, dir: "left", rectX: 10, rectY: 1200, rectW: 65, rectH: 125}, //is this even a classroom?
    //left rooms on the bottom
    {room: "2.30", x: 115, y: 1340, dir: "left", rectX: 10, rectY: 1325, rectW: 90, rectH: 145}, //todo could not find  name
    {room: "2.31", x: 115, y: 1650, dir: "left", rectX: 10, rectY: 1630, rectW: 90, rectH: 160}, //todo could not find name
    //right rooms on the bottom
    {room: "2.370", x: 285, y: 1645, dir: "right", rectX: 300, rectY: 1630, rectW: 90, rectH: 160},
    {room: "2.380", x: 285, y: 1400, dir: "right", rectX: 300, rectY: 1390, rectW: 90, rectH: 105},
    {room: "2.390", x: 285, y: 1375, dir: "right", rectX: 300, rectY: 1305, rectW: 80, rectH: 85},
    //middle rooms on the bottom
    {room: "2.530", x: 150, y: 1285, dir: "bottom", rectX: 130, rectY: 1300, rectW: 135, rectH: 195},
    {room: "2.540", x: 255, y: 1705, dir: "top", rectX: 130, rectY: 1495, rectW: 135, rectH: 190},


    //floor 3
    //rooms top left
    {room: "3.010", x: 85, y: 905, dir: "bottom", rectX: 10, rectY: 930, rectW: 85, rectH: 165},
    {room: "3.040", x: 85, y: 900, dir: "top", rectX: 10, rectY: 710, rectW: 85, rectH: 165},
    {room: "3.050", x: 85, y: 685, dir: "top", rectX: 10, rectY: 575, rectW: 85, rectH: 90},
    {room: "3.070", x: 110, y: 475, dir: "left", rectX: 10, rectY: 465, rectW: 85, rectH: 110},
    {room: "3.100", x: 110, y: 450, dir: "left", rectX: 10, rectY: 350, rectW: 85, rectH: 115},
    {room: "3.110", x: 85, y: 160, dir: "bottom", rectX: 10, rectY: 185, rectW: 85, rectH: 170},
    {room: "3.120", x: 85, y: 160, dir: "top", rectX: 10, rectY: 10, rectW: 85, rectH: 125},
    //rooms top right
    {room: "3.160", x: 285, y: 30, dir: "right", rectX: 300, rectY: 10, rectW: 90, rectH: 125},
    {room: "3.170", x: 312, y: 240, dir: "top", rectX: 300, rectY: 135, rectW: 90, rectH: 85},
    {room: "3.180", x: 312, y: 240, dir: "bottom", rectX: 300, rectY: 260, rectW: 90, rectH: 90},
    {room: "3.190", x: 285, y: 450, dir: "right", rectX: 300, rectY: 350, rectW: 90, rectH: 110, seats: 15, projectors: 1, computers: 0,access: "None", other: ""},
    {room: "3.200", x: 285, y: 475, dir: "right", rectX: 300, rectY: 465, rectW: 90, rectH: 115, seats: 30, projectors: 1, computers: 30,access: "None", other: ""},
    {room: "3.210", x: 312, y: 685, dir: "top", rectX: 300, rectY: 575, rectW: 90, rectH: 90, seats: 120, projectors: 2, computers: 0,access: "None", other: ""},
    {room: "3.220", x: 312, y: 685, dir: "bottom", rectX: 300, rectY: 710, rectW: 90, rectH: 110},
    {room: "3.230", x: 312, y: 955, dir: "top", rectX: 300, rectY: 820, rectW: 90, rectH: 115},
    {room: "3.240", x: 312, y: 955, dir: "bottom", rectX: 300, rectY: 980, rectW: 90, rectH: 110},
    //rooms bottom left
    {room: "3.330", x: 85, y: 1285, dir: "bottom", rectX: 10, rectY: 1305, rectW: 85, rectH: 165},
    {room: "3.350", x: 110, y: 1778, dir: "left", rectX: 10, rectY: 1635, rectW: 85, rectH: 155},
    //rooms bottom right
    {room: "3.370", x: 285, y: 1778, dir: "right", rectX: 300, rectY: 1635, rectW: 85, rectH: 155},
    {room: "3.380", x: 285, y: 1400, dir: "right", rectX: 300, rectY: 1390, rectW: 85, rectH: 110},
    {room: "3.390", x: 312, y: 1285, dir: "bottom", rectX: 300, rectY: 1305, rectW: 85, rectH: 85},
    //big rooms in the middle
    {room: "3.500", x: 165, y: 1175, dir: "top", rectX: 130, rectY: 875, rectW: 135, rectH: 240},
    {room: "3.510", x: 145, y: 530, dir: "bottom", rectX: 130, rectY: 610, rectW: 135, rectH: 240},
    {room: "3.520", x: 145, y: 120, dir: "bottom", rectX: 130, rectY: 170, rectW: 135, rectH: 180},
    {room: "3.530", x: 145, y: 1290, dir: "bottom", rectX: 130, rectY: 1305, rectW: 135, rectH: 190},
    {room: "3.540", x: 145, y: 1700, dir: "top", rectX: 130, rectY: 1495, rectW: 135, rectH: 190},


    //floor4
    //top left rooms
    {room: "4.300", x: 85, y: 1170, dir: "bottom", rectX: 10, rectY: 1195, rectW: 90, rectH: 115},
    {room: "4.010", x: 85, y: 955, dir: "bottom", rectX: 10, rectY: 980, rectW: 90, rectH: 115},
    {room: "4.020", x: 85, y: 955, dir: "top", rectX: 10, rectY: 820, rectW: 90, rectH: 115},
    {room: "4.030", x: 85, y: 685, dir: "bottom", rectX: 10, rectY: 710, rectW: 90, rectH: 115},
    {room: "4.040", x: 85, y: 685, dir: "top", rectX: 10, rectY: 575, rectW: 90, rectH: 90},
    {room: "4.050", x: 113, y: 476, dir: "left", rectX: 10, rectY: 465, rectW: 90, rectH: 115},
    {room: "4.060", x: 113, y: 455, dir: "left", rectX: 10, rectY: 350, rectW: 90, rectH: 155},
    {room: "4.070", x: 85, y: 325, dir: "top", rectX: 10, rectY: 185, rectW: 90, rectH: 115},
    {room: "4.080", x: 113, y: 125, dir: "left", rectX: 10, rectY: 85, rectW: 90, rectH: 105},
    {room: "4.090", x: 113, y: 125, dir: "top", rectX: 10, rectY: 10, rectW: 120, rectH: 75},
    {room: "4.100", x: 148, y: 157, dir: "top", rectX: 130, rectY: 10, rectW: 70, rectH: 100},
    //top right rooms
    {room: "4.410", x: 313, y: 1170, dir: "bottom", rectX: 300, rectY: 1195, rectW: 90, rectH: 115},
    {room: "4.200", x: 313, y: 955, dir: "bottom", rectX: 300, rectY: 980, rectW: 90, rectH: 115},
    {room: "4.190", x: 313, y: 955, dir: "top", rectX: 300, rectY: 820, rectW: 90, rectH: 115},
    {room: "4.180", x: 313, y: 685, dir: "bottom", rectX: 300, rectY: 710, rectW: 90, rectH: 110},
    {room: "4.170", x: 313, y: 685, dir: "top", rectX: 300, rectY: 580, rectW: 90, rectH: 85},
    {room: "4.160", x: 286, y: 476, dir: "right", rectX: 300, rectY: 465, rectW: 90, rectH: 115},
    {room: "4.150", x: 286, y: 455, dir: "right", rectX: 300, rectY: 350, rectW: 90, rectH: 115},
    {room: "4.140", x: 313, y: 325, dir: "top", rectX: 300, rectY: 190, rectW: 90, rectH: 110},
    {room: "4.130", x: 286, y: 125, dir: "right", rectX: 300, rectY: 85, rectW: 90, rectH: 105},
    {room: "4.120", x: 286, y: 125, dir: "top", rectX: 270, rectY: 10, rectW: 120, rectH: 75},
    {room: "4.110", x: 253, y: 157, dir: "top", rectX: 200, rectY: 10, rectW: 70, rectH: 100},
    //middle on top rooms
    {room: "4.540", x: 148, y: 157, dir: "bottom", rectX: 130, rectY: 175, rectW: 140, rectH: 175},
    {room: "4.530", x: 148, y: 532, dir: "bottom", rectX: 130, rectY: 550, rectW: 140, rectH: 160},
    {room: "4.520", x: 113, y: 735, dir: "right", rectX: 130, rectY: 710, rectW: 140, rectH: 145},
    {room: "4.510", x: 113, y: 987, dir: "right", rectX: 130, rectY: 870, rectW: 140, rectH: 145},
    {room: "4.500", x: 168, y: 1170, dir: "top", rectX: 130, rectY: 1010, rectW: 140, rectH: 135},
    //bottom left rooms
    {room: "4.310", x: 113, y: 1375, dir: "left", rectX: 10, rectY: 1305, rectW: 90, rectH: 85},
    {room: "4.320", x: 113, y: 1400, dir: "left", rectX: 10, rectY: 1390, rectW: 90, rectH: 80},
    {room: "4.330", x: 113, y: 1655, dir: "left", rectX: 10, rectY: 1630, rectW: 90, rectH: 80},
    {room: "4.340", x: 113, y: 1655, dir: "bottom", rectX: 10, rectY: 1710, rectW: 120, rectH: 80},
    {room: "4.350", x: 148, y: 1655, dir: "bottom", rectX: 130, rectY: 1670, rectW: 70, rectH: 120},
    //bottom right rooms
    {room: "4.400", x: 286, y: 1375, dir: "right", rectX: 300, rectY: 1305, rectW: 90, rectH: 85},
    {room: "4.390", x: 286, y: 1400, dir: "right", rectX: 300, rectY: 1390, rectW: 90, rectH: 105},
    {room: "4.380", x: 286, y: 1655, dir: "right", rectX: 300, rectY: 1630, rectW: 90, rectH: 80},
    {room: "4.370", x: 286, y: 1655, dir: "bottom", rectX: 270, rectY: 1705, rectW: 120, rectH: 80},
    {room: "4.360", x: 253, y: 1655, dir: "bottom", rectX: 200, rectY: 1670, rectW: 70, rectH: 120},
    //bottom middle rooms
    {room: "4.570", x: 148, y: 1655, dir: "top", rectX: 130, rectY: 1440, rectW: 140, rectH: 190},
    {room: "4.560", x: 250, y: 1280, dir: "bottom", rectX: 200, rectY: 1305, rectW: 70, rectH: 135},
    {room: "4.550", x: 148, y: 1280, dir: "bottom", rectX: 130, rectY: 1305, rectW: 70, rectH: 135},
];