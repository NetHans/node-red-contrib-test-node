module.exports = function (RED) {
    RED.nodes.registerType("node-red-contrib-test-node", NodeRedContribTestNodeHandler, {});

    function NodeRedContribTestNodeHandler(config) {
        
        RED.nodes.createNode(this, config);
        let node = this;

        node.on('input', function (msg, send, done) {
            send = send || function() { node.send.apply(node,arguments); };
			done = done || function() { };

            node.status({fill: "green", shape: "dot", text: "done"});

            msg.payload = "test";
            
            send(msg);
            done();
        });

        node.on('close', function(removed, done) {
            done();
        });
    }
};